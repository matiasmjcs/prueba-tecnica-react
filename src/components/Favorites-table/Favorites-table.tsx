import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
} from '@tanstack/react-table'
import { Book, BookTable } from '../../models/IBook'
import { NavLink } from 'react-router-dom'

import { removeFavorites } from '../../redux/favorites-book-reducer/favorites-book-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { StoreReducer } from '../../redux/store'
import { FcLike } from 'react-icons/fc'
import { useEffect, useMemo, useState } from 'react'
import { LoadingBookTable } from '../Loading-book-table'

export const FavoritesTable = () => {
  const dispatch = useDispatch()
  const count: Book[] = useSelector((state: StoreReducer) => state.favorites)

  const [isLoading, setIsLoading] = useState(false)

  setTimeout(()=> {
    setIsLoading(true)
  },800)

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
      header: 'Characters',
      footer: 'Characters',
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
    columnHelper.accessor('removeFavorite', {
      header: 'Favorite',
      footer: 'Favorite',
      cell: (info) => {
        const value: Book = info.row.original
        return (
          <button onClick={() => dispatch(removeFavorites(value))}>
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
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  })

  useEffect(() => {
    table.setPageSize(4)
  }, [table])

  if (!isLoading) return <LoadingBookTable />
  if (!count) return <LoadingBookTable/>
  return (
    <div className="grid-rows-2 sm:w-full md:w-4/5 justify-items-center justify-center m-0 pt-20 overflow-auto wx-10">
      <table className="bg-slate-950 p-0 text-sm w-full text-gray-100 rounded-2xl overflow-hidden">
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
