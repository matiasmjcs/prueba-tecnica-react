import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../../services/Book-api'
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  PaginationState,
  FilterFn,
  ColumnFiltersState,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
} from '@tanstack/react-table'
import { Book, BookTable } from '../../models/IBook'
import { NavLink } from 'react-router-dom'

import {
  addFavorites,
  removeFavorites,
} from '../../redux/favorites-book-reducer/favorites-book-reducer'
import { useDispatch, useSelector } from 'react-redux'

import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { StoreReducer } from '../../redux/store'
import { useEffect, useMemo, useState } from 'react'
import { LoadingBookTable } from '../Loading-book-table'

import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils'
import { Filter } from '../../utils/Filter'

import { ModalFavorites } from '../Modal-Favorites'
import { motion } from 'framer-motion'
import { StateModal } from '../../models'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<Book>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const fuzzyFilter: FilterFn<Book> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

export const BooksTable = (): JSX.Element => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const [success, setSucess] = useState(false)
  const [remove, setRemove] = useState(false)

  const [modalText, setModalText] = useState('')

  const dispatch = useDispatch()

  const dataList: Book[] = []
  const { data, isLoading } = useQuery({
    queryKey: ['Books'],
    queryFn: getBooks,
  })

  const columnHelper = createColumnHelper<BookTable | Book>()

  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        footer: 'Name',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('authors', {
        header: 'Authors',
        footer: 'Authors',
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor('released', {
        header: 'Released',
        footer: 'Released',
        enableColumnFilter: false,
        cell: (info) => info.getValue().split('T')[0],
      }),
      columnHelper.accessor('view', {
        header: 'view',
        footer: 'view',
        enableColumnFilter: false,
        enableSorting: false,
        cell: (info) => {
          const value = info.row.original.name
          return (
            <NavLink
              to={`/book/${value}`}
              className="text-blue-500 hover:underline"
            >
              View Book
            </NavLink>
          )
        },
      }),
      columnHelper.accessor('favorite', {
        header: 'Favorite',
        footer: 'Favorite',
        enableColumnFilter: false,
        enableSorting: false,
        size: 50,
        cell: (info) => {
          const value: Book = info.row.original
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const isfavorite = useSelector((state: StoreReducer) =>
            state.favorites.includes(value)
          )

          const handleToggleFavorites = () => {
            if (isfavorite) {
              dispatch(removeFavorites(value))
              setModalText('Removed from favorites')
              setRemove(true)
              setTimeout(() => {
                setRemove(false)
              }, 800)
            } else {
              dispatch(addFavorites(value))
              setModalText('Added to favorites')
              setSucess(true)
              setTimeout(() => {
                setSucess(false)
              }, 800)
            }
          }
          return (
            <button onClick={handleToggleFavorites}>
              {isfavorite ? <FcLike /> : <FcLikePlaceholder />}
            </button>
          )
        },
      }),
    ],
    [columnHelper, dispatch]
  )

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data: data ?? dataList,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
      pagination,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    onPaginationChange: setPagination,
  })

  useEffect(() => {
    table.setPageSize(4)
  }, [table])

  if (isLoading) return <LoadingBookTable />
  return (
    <>
      {success && (
        <ModalFavorites _type={StateModal.Success} text={`${modalText}`} />
      )}
      {remove && (
        <ModalFavorites _type={StateModal.Error} text={`${modalText}`} />
      )}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
        style={{ minHeight: 350 }}
        className="grid-rows-2 sm:w-full justify-items-center justify-center sm:mx-10 md:mx-20 mt-20 wx-10"
      >
        <div className="h-2" />
        <table className="bg-slate-950 p-0 text-sm w-full text-gray-100 rounded-2xl">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-4 pt-6 text-center"
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽',
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className={`px-5 py-5 text-center`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="flex text-white justify-between space-x-2 px-3 mt-4">
          <button
            className="border rounded px-5 flex justify-center"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="border rounded px-5 flex justify-center"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
        </div>
      </motion.div>
    </>
  )
}
