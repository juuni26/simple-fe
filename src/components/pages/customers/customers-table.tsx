import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Pagination } from '@/components/atoms/pagination'
import { DataTable } from '@/components/molescules/datatable'
import { DEFAULT_PAGE_SIZE } from '@/consts'
import { Customer } from '@/dtos/api'
import { ColumnDef } from '@tanstack/react-table'

const CustomersTableColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      const id = row.original.id
      return (
        <div className="flex justify-start">
          <Link
            to={`/customers/${id}`}
            className="flex items-center gap-1 text-blue-800"
          >
            {id} <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: 'companyName',
    header: 'Company Name',
  },
  {
    accessorKey: 'contactName',
    header: 'Contact Name',
  },
  {
    accessorKey: 'contactTitle',
    header: 'Contact Title',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },

  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'fax',
    header: 'Fax',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'region',
    header: 'Region',
  },
  {
    accessorKey: 'postalCode',
    header: 'Postal Code',
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
]

export const CustomersTable = ({
  data,
  page,
  total,
  onPageChange,
}: {
  data: Customer[]
  page: number
  total: number
  onPageChange: (page: number) => void
}) => {
  const totalPages = Math.ceil(total / DEFAULT_PAGE_SIZE)
  return (
    <>
      <DataTable columns={CustomersTableColumns} data={data} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  )
}
