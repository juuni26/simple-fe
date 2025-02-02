import { CustomerFilter } from '@/components/pages/customers/customers-filter'
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/consts'
import { useQuery } from '@tanstack/react-query'
import { useServiceApi } from '../useServiceApi'

export const useGetCustomersWithFilter = (
  filter: CustomerFilter = {},
  page: number = DEFAULT_PAGE,
  pageSize: number = DEFAULT_PAGE_SIZE,
) => {
  const { searchCustomers } = useServiceApi()
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['customers', page, filter],
    queryFn: () =>
      searchCustomers({
        ...filter,
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: 'total',
      }),
    placeholderData: (keepPreviousData) => keepPreviousData,
  })

  const customers = data?.results || []
  const total = data?.total || 0

  return { customers, total, isLoading, error, isFetching }
}

export const useGetCustomerDetail = (id: string = '') => {
  const { getCustomerDetail } = useServiceApi()
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['customer', id],
    queryFn: () => getCustomerDetail(id),
    enabled: !!id,
  })

  const customer = data?.customer || null
  const orderCustomer = data?.orders || []

  return { customer, orderCustomer, isLoading, error, isFetching }
}
