import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { BackHome } from '@/components/atoms/backHome'
import { PageLoader } from '@/components/atoms/loader'
import { useGetCustomersWithFilter } from '@/hooks/customer'
import { CustomerFilter, CustomersFilter } from './customers-filter'
import { CustomersTable } from './customers-table'

export const CustomersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || 1)

  const filter: CustomerFilter = {
    id: searchParams.get('id') || undefined,
    companyName: searchParams.get('companyName') || undefined,
    contactName: searchParams.get('contactName') || undefined,
    contactTitle: searchParams.get('contactTitle') || undefined,
    address: searchParams.get('address') || undefined,
    city: searchParams.get('city') || undefined,
    region: searchParams.get('region') || undefined,
    postalCode: searchParams.get('postalCode') || undefined,
    country: searchParams.get('country') || undefined,
    phone: searchParams.get('phone') || undefined,
    fax: searchParams.get('fax') || undefined,
  }

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      prev.set('page', page.toString())
      return prev
    })
  }

  const handleFilterSubmit = (newFilter: CustomerFilter) => {
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

  const { customers, total, isLoading, error } = useGetCustomersWithFilter(
    filter,
    page,
  )

  if (isLoading) return <PageLoader />
  if (error) return <div>Error loading customers</div>

  return (
    <div>
      <Helmet>
        <title>Customers Page</title>
      </Helmet>
      <h1 className="text-center text-2xl font-bold">Customers</h1>
      <div className="mb-4">
        <CustomersFilter
          onSubmit={handleFilterSubmit}
          onReset={handleFilterReset}
          defaultValues={filter}
        />
      </div>
      <CustomersTable
        data={customers}
        page={page}
        total={total}
        onPageChange={handlePageChange}
      />
      <BackHome />
    </div>
  )
}
