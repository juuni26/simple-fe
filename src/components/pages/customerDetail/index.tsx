import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { BackHome } from '@/components/atoms/backHome'
import { PageLoader } from '@/components/atoms/loader'
import { useGetCustomerDetail } from '@/hooks/customer'
import { formatDateASP } from '@/lib/utils'
import { ErrorPage } from '../error'

export function CustomerDetailPage() {
  const { id } = useParams()

  const { customer, orderCustomer, isLoading, error } = useGetCustomerDetail(id)

  if (isLoading) return <PageLoader />
  if (error) return <ErrorPage message="Error loading customer detail" />
  if (!customer) return <ErrorPage message="Customer not found" />

  // public id: string

  // // @DataMember
  // public companyName: string

  // // @DataMember
  // public contactName: string

  // // @DataMember
  // public contactTitle: string

  // // @DataMember
  // public address: string

  // // @DataMember
  // public city: string

  // // @DataMember
  // public region: string

  // // @DataMember
  // public postalCode: string

  // // @DataMember
  // public country: string

  // // @DataMember
  // public phone: string

  // // @DataMember
  // public fax: stringpublic id: string

  // // @DataMember
  // public companyName: string

  // // @DataMember
  // public contactName: string

  // // @DataMember
  // public contactTitle: string

  // // @DataMember
  // public address: string

  // // @DataMember
  // public city: string

  // // @DataMember
  // public region: string

  // // @DataMember
  // public postalCode: string

  // // @DataMember
  // public country: string

  // // @DataMember
  // public phone: string

  // // @DataMember
  // public fax: string
  return (
    <div>
      <Helmet>
        <title>Customer Detail | {customer.companyName}</title>
      </Helmet>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">
          Customer Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Personal details and order history.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Customer ID</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.id}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Company Name
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.companyName}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Contact Name
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.contactName}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Contact Title
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.contactTitle}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Address</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.address}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">City</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.city}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Region</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.region || '-'}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Postal Code</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.postalCode}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Country</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.country || '-'}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Phone</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.phone || '-'}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Fax</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {customer.fax || '-'}
            </dd>
          </div>

          {/* order history */}
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">
              Order History
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {orderCustomer.length}{' '}
              {orderCustomer.length > 1 ? 'Orders' : 'Order'}
            </dd>
            <div className="mt-1 max-h-[50vw] overflow-y-auto rounded-md bg-gray-100 p-4 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {orderCustomer.map((order) => (
                <div key={order.order.id} className="mb-2 flex flex-col">
                  <div>Order ID: {order.order.id}</div>
                  <div>
                    Order date:{' '}
                    {formatDateASP(order.order.orderDate)?.format(
                      'DD/MM/YYYY',
                    ) || '-'}
                  </div>
                  <div>Ship City: {order.order.shipCity}</div>
                  <div>Ship Country: {order.order.shipCountry}</div>
                  <div>
                    Shipped Date:{' '}
                    {formatDateASP(order.order.shippedDate)?.format(
                      'DD/MM/YYYY',
                    ) || '-'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </dl>
      </div>
      <BackHome className="mt-4" />
    </div>
  )
}
