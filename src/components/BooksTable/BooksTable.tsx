import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../../services/book-api'
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
} from '../../app/favorites-book-reducer/favorites-book-reducer'
import { useDispatch, useSelector } from 'react-redux'

import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { StoreReducer } from '../../app/store'
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
    columnHelper.accessor('numberOfPages', {
      header: 'NumberOfPages',
      footer: 'NumberOfPages',
      cell: (info) => info.getValue(),
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

  const [{ pageIndex, pageSize }, setPagination] =
    useState<PaginationState>({
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
    <div>
      <table className="font-mono text-sm md:table-auto border-collapse w-full bg-slate-950 bg-opacity-95 text-gray-100 rounded-2xl">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-start whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[200px]"
                >
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
                <td
                  key={cell.id}
                  className="px-4 py-2 border border-slate-600 text-start whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[200px]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="border rounded p-1"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {'<'}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {'>'}
      </button>
    </div>
  )
}
