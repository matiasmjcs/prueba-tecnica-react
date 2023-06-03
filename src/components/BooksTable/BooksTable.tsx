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

export const BooksTable = () => {
  const dispatch = useDispatch()

  const dataList: Book[] = []
  const { data, isLoading } = useQuery({
    queryKey: ['Books'],
    queryFn: getBooks,
  })

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
    columnHelper.accessor('characters', {
      header: 'NumberOfCharacters',
      footer: 'NumberOfCharacters',
      cell: (info) => info.getValue().length,
    }),
    columnHelper.accessor('released', {
      header: 'Released',
      footer: 'Released',
      cell: (info) => info.getValue().split('T')[0],
    }),
    columnHelper.accessor('view', {
      header: 'view',
      footer: 'view',
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
          } else {
            dispatch(addFavorites(value))
          }
        }
        return (
          <button onClick={handleToggleFavorites}>
            {isfavorite ? <FcLike /> : <FcLikePlaceholder />}
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
    data: data ?? dataList,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  })

  useEffect(() => {
    table.setPageSize(4)
  }, [table])

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="grid-rows-2 sm:w-full md:w-4/5 justify-items-center justify-center m-0 pt-20 overflow-auto wx-10">
      <table className="bg-slate-950 font-mono p-0 text-sm w-full text-gray-100 rounded-2xl overflow-hidden">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-6 text-center">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
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
    </div>
  )
}
