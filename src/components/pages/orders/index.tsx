import { LoaderCircle } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import { BackHome } from '@/components/atoms/backHome'
import { PageLoader } from '@/components/atoms/loader'
import { useGetOrdersWithFilter } from '@/hooks/order'
import { ErrorPage } from '../error'
import { OrderFilter, OrdersFilter } from './orders-filter'
import { OrdersTable } from './orders-table'

export const OrdersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || 1)

  const filter: OrderFilter = {
    customerId: searchParams.get('customerId') || undefined,
    employeeId: Number(searchParams.get('employeeId')) || undefined,
    orderDateFrom: searchParams.get('orderDateFrom') || undefined,
    orderDateTo: searchParams.get('orderDateTo') || undefined,
    shipName: searchParams.get('shipName') || undefined,
    shipVia: Number(searchParams.get('shipVia')) || undefined,
    shipCity: searchParams.get('shipCity') || undefined,
    shipCountry: searchParams.get('shipCountry') || undefined,
    freight: Number(searchParams.get('freight')) || undefined,
  }

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      prev.set('page', page.toString())
      return prev
    })
  }

  const handleFilterSubmit = (newFilter: OrderFilter) => {
    setSearchParams((prev) => {
      prev.set('page', '1')
      Object.entries(newFilter).forEach(([key, value]) => {
        if (value) {
          prev.set(key, String(value))
        } else {
          prev.delete(key)
        }
      })
      return prev
    })
  }

  const handleFilterReset = () => {
    setSearchParams(() => {
      const newParams = new URLSearchParams()
      newParams.set('page', '1')
      return newParams
    })
  }

  const { orders, total, isLoading, error } = useGetOrdersWithFilter(
    filter,
    page,
  )

  if (isLoading) return <PageLoader />
  if (error) return <ErrorPage message="Error loading orders" />

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Orders</h1>
      <div className="mb-4">
        <OrdersFilter
          onSubmit={handleFilterSubmit}
          onReset={handleFilterReset}
          defaultValues={filter}
        />
      </div>
      <OrdersTable
        data={orders}
        page={page}
        total={total}
        onPageChange={handlePageChange}
      />
      <BackHome />
    </div>
  )
}
