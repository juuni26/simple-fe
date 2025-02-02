import { createBrowserRouter } from 'react-router-dom'

import { Container } from './components/molescules/container'
import { CustomerDetailPage } from './components/pages/customerDetail'
import { CustomersPage } from './components/pages/customers'
import HomePage from './components/pages/home'
import { OrdersPage } from './components/pages/orders'

const withContainer = (page: React.ReactNode) => {
  return <Container>{page}</Container>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: withContainer(<HomePage />),
  },
  {
    path: '/orders',
    element: withContainer(<OrdersPage />),
  },
  {
    path: '/customers',
    element: withContainer(<CustomersPage />),
  },
  {
    path: '/customers/:id',
    element: withContainer(<CustomerDetailPage />),
  },
])
