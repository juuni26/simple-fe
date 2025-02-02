import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="max-w-40p-2 mx-auto">
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <h1 className="mb-4 text-center text-2xl font-bold">List Services</h1>
      <div className="flex flex-col gap-2">
        <Link
          to="/orders"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Orders
        </Link>
        <Link
          to="/customers"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Customers
        </Link>
      </div>
    </div>
  )
}
