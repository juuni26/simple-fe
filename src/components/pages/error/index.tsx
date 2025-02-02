import { Link } from 'react-router-dom'

export const ErrorPage = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">Error</div>
      <div className="text-lg">{message}</div>

      <Link to="/" className="text-blue-500">
        Go to home
      </Link>
    </div>
  )
}
