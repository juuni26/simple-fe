import { Inspect, JsonServiceClient } from '@servicestack/client'
import {
  GetAllCustomers,
  GetCustomerDetails,
  GetOrders,
  QueryCustomers,
  QueryCustomersOptions,
  QueryOrders,
  QueryOrdersOptions,
} from '../dtos/api'

export const useServiceApi = () => {
  const client = new JsonServiceClient(
    'https://ec2-34-201-46-215.compute-1.amazonaws.com/',
  )
  client.credentials = 'omit'

  // server pagination here
  const getOrders = async (page = 1) => {
    const api = await client.api(
      new GetOrders({
        page,
      }),
    )
    return api.response?.results
  }

  // no pagination here
  const getCustomers = async () => {
    const api = await client.api(new GetAllCustomers({}))
    return api.response
  }

  const getCustomerOrders = async (customerId: string) => {
    const api = await client.api(new GetOrders({ customerId }))
    return api.response
  }

  const getCustomerDetail = async (customerId: string) => {
    const api = await client.api(new GetCustomerDetails({ id: customerId }))
    return api.response
  }

  // search with default server pagination?
  const searchCustomers = async (options: QueryCustomersOptions) => {
    const api = await client.api(new QueryCustomers(options))
    return api.response
  }

  // search with default server pagination?
  const searchOrders = async (options: QueryOrdersOptions) => {
    const api = await client.api(new QueryOrders(options))
    return api.response
  }

  return {
    getOrders,
    getCustomers,
    getCustomerOrders,
    getCustomerDetail,
    searchCustomers,
    searchOrders,
  }
}
