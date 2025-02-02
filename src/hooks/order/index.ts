import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/consts'
import { QueryOrdersOptions } from '@/dtos/api'
import { useQuery } from '@tanstack/react-query'
import { useServiceApi } from '../useServiceApi'

export const useGetOrdersWithFilter = (
  filter: QueryOrdersOptions = {},
  page: number = DEFAULT_PAGE,
  pageSize: number = DEFAULT_PAGE_SIZE,
) => {
  const { searchOrders } = useServiceApi()
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['orders', page, filter],
    placeholderData: (keepPreviousData) => keepPreviousData,
    queryFn: () =>
      searchOrders({
        ...filter,
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: 'total',
      }),
  })

  const orders = data?.results || []
  const total = data?.total || 0

  return { orders, total, isLoading, error, isFetching }
}
