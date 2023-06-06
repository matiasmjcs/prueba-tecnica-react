import { useQuery } from '@tanstack/react-query'
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  PaginationState,
  flexRender,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  ColumnFiltersState,
} from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react'
import { Character } from '../../models/ICharacter'
import { getCharacter } from '../../services/Characters-api/Characters-api'
import { LoadingCharacterTable } from '../Loading-character-table/Loading-character-table'
import { Filter } from '../../utils/Filter'
import { motion } from 'framer-motion'
import { fuzzyFilter } from '../../hooks/fuzzyFilter'

export interface Props {
  data: string[]
}

export const CharactersTable = ({ data }: Props): JSX.Element => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const { data: characterData, isLoading } = useQuery({
    queryKey: data,
    queryFn: () => Promise.all(data.map((d) => getCharacter(d))),
    onSuccess: () => {
      console.log('success')
    },
  })
  const columnHelper = createColumnHelper<Character>()

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      footer: 'Name',
      cell: (info) => <p>{info.getValue()}</p>,
    }),
    columnHelper.accessor('gender', {
      header: 'Gender',
      footer: 'Gender',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('books', {
      header: 'Books',
      footer: 'Books',
      enableColumnFilter: false,
      cell: (info) => {
        const number: number = info.getValue().length ?? 0
        return number
      },
    }),
  ]

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const pagination = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  )

  const filteredCharacterData: Character[] = (characterData as Character[]) || [
    'caharacter1',
    'caharacter2',
    'caharacter3',
  ]

  const table = useReactTable<Character>({
    data: filteredCharacterData,
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    onPaginationChange: setPagination,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
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
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugHeaders: true,
  })

  useEffect(() => {
    table.setPageSize(4)
  }, [table])

  if (isLoading) return <LoadingCharacterTable />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      className="grid-rows-2 sm:w-full md:w-4/5 justify-items-center justify-center mb-10 overflow-x-auto"
    >
      <table className="sm:wx-10 bg-slate-950 p-0 text-md w-full text-gray-100 rounded-2xl">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="px-4 pt-6 text-start"
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
                <td key={cell.id} className="px-4 py-6 text-white">
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
    </motion.div>
  )
}
