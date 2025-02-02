import {
  ArrowUpDown,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Pagination } from '@/components/atoms/pagination'
import { DataTable } from '@/components/molescules/datatable'
import { Button } from '@/components/ui/button'
import { DEFAULT_PAGE_SIZE } from '@/consts'
import { Order } from '@/dtos/api'
import { formatDateASP } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'

const OrdersTableColumns: ColumnDef<Order>[] = [
  {
    id: 'expanded',
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const id = row.original.id
      return (
        <Button
          variant="link"
          className="justify-start text-blue-800"
          onClick={() => row.toggleExpanded()}
        >
          {id}{' '}
          {row.getIsExpanded() ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      )
    },
  },
  {
    accessorKey: 'customerId',
    header: 'Customer ID',
    cell: ({ row }) => {
      const customerId = row.original.customerId
      return (
        <div className="flex justify-start">
          <Link
            to={`/customers/${customerId}`}
            className="flex items-center gap-1 text-blue-800"
          >
            {customerId} <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: 'orderDate',
    header: 'Order Date',
    cell: ({ row }) => {
      const orderDate = row.original.orderDate
      return formatDateASP(orderDate)?.format('DD/MM/YYYY')
    },
  },
  {
    accessorKey: 'shipName',
    header: 'Ship Name',
  },
  {
    accessorKey: 'shipVia',
    header: 'Ship Via',
  },
  {
    accessorKey: 'freight',
    header: 'Freight',
  },
  {
    accessorKey: 'shipCity',
    header: 'Ship City',
  },

  {
    accessorKey: 'shipCountry',
    header: 'Ship Country',
  },
]

export const OrdersTable = ({
  data,
  page,
  total,
  onPageChange,
}: {
  data: Order[]
  page: number
  total: number
  onPageChange: (page: number) => void
}) => {
  const totalPages = Math.ceil(total / DEFAULT_PAGE_SIZE)
  return (
    <>
      <DataTable
        columns={OrdersTableColumns}
        data={data}
        renderSubComponent={({ row }) => (
          <div className="bg-muted/50 p-4">
            <h4 className="mb-2 font-medium">Order Details</h4>
            <div className="flex gap-x-2">
              <div className="flex flex-col gap-y-2">
                <div className="font-bold">ID</div>
                <div className="font-bold">Customer ID</div>
                <div className="font-bold">Employee ID</div>
                <div className="font-bold">Order Date</div>
                <div className="font-bold">Required Date</div>
                <div className="font-bold">Shipped Date</div>
                <div className="font-bold">Ship Via</div>
                <div className="font-bold">Freight</div>
                <div className="font-bold">Ship Name</div>
                <div className="font-bold">Ship Address</div>
                <div className="font-bold">Ship City</div>
                <div className="font-bold">Ship Region</div>
                <div className="font-bold">Ship Postal Code</div>
                <div className="font-bold">Ship Country</div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="">{row.original.id || '-'}</div>
                <div className="">{row.original.customerId || '-'}</div>
                <div className="">{row.original.employeeId || '-'}</div>
                <div className="">
                  {formatDateASP(row.original.orderDate)?.format(
                    'DD/MM/YYYY',
                  ) || '-'}
                </div>
                <div className="">
                  {formatDateASP(row.original.requiredDate)?.format(
                    'DD/MM/YYYY',
                  ) || '-'}
                </div>
                <div className="">
                  {formatDateASP(row.original.shippedDate)?.format(
                    'DD/MM/YYYY',
                  ) || '-'}
                </div>
                <div className="">{row.original.shipVia || '-'}</div>
                <div className="">{row.original.freight || '-'}</div>
                <div className="">{row.original.shipName || '-'}</div>
                <div className="">{row.original.shipAddress || '-'}</div>
                <div className="">{row.original.shipCity || '-'}</div>
                <div className="">{row.original.shipRegion || '-'}</div>
                <div className="">{row.original.shipPostalCode || '-'}</div>
                <div className="">{row.original.shipCountry || '-'}</div>
              </div>
            </div>
          </div>
        )}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  )
}
