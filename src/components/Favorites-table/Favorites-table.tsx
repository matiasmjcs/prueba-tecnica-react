import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  ColumnFiltersState,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
} from '@tanstack/react-table'
import { Book, BookTable } from '../../models/IBook'
import { NavLink } from 'react-router-dom'

import { removeFavorites } from '../../redux/favorites-book-reducer/favorites-book-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { StoreReducer } from '../../redux/store'
import { FcLike } from 'react-icons/fc'
import { useEffect, useMemo, useState } from 'react'
import { LoadingBookTable } from '../Loading-book-table/Loading-book-table'
import { Filter } from '../../utils/Filter'
import { motion } from 'framer-motion'
import { StateModal } from '../../models'
import { ModalFavorites } from '../Modal-Favorites/Modal-favorites'
import { fuzzyFilter } from '../../hooks/fuzzyFilter'

export const FavoritesTable = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const dispatch = useDispatch()
  const count: Book[] = useSelector((state: StoreReducer) => state.favorites)
  const [success, setSucess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  setTimeout(() => {
    setIsLoading(true)
  }, 800)

  const columnHelper = createColumnHelper<BookTable | Book>()

  const columns = [
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
    columnHelper.accessor('removeFavorite', {
      header: 'Favorite',
      footer: 'Favorite',
      enableColumnFilter: false,
      enableSorting: false,
      cell: (info) => {
        const value: Book = info.row.original
        return (
          <button
            onClick={() => {
              dispatch(removeFavorites(value))
              setSucess(true)
              setTimeout(() => {
                setSucess(false)
              }, 1000)
            }}
          >
            <FcLike />
          </button>
        )
      },
    }),
  ]

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
    data: count,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    onPaginationChange: setPagination,
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
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugHeaders: true,
  })

  useEffect(() => {
    table.setPageSize(4)
  }, [table])

  if (!isLoading) return <LoadingBookTable />
  if (!count) return <LoadingBookTable />
  return (
    <>
      {success && (
        <ModalFavorites
          _type={StateModal.Error}
          text="Removed from favorites"
        />
      )}
      <motion.div
        style={{ minHeight: 500 }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
        className="grid-rows-2 sm:w-full justify-items-center justify-center sm:mx-10 md:mx-20 mt-20 wx-10"
      >
        <motion.table
          style={{ minHeight: 350 }}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
          className="bg-slate-950 p-0 text-sm w-full text-gray-100 rounded-2xl"
        >
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-6 text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </motion.table>

        <div className="flex w-full text-white justify-between space-x-2 px-3 mt-4">
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
