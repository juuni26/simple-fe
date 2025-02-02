import { LoaderCircle } from 'lucide-react'

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <LoaderCircle className="animate-spin" />
      Loading ...
    </div>
  )
}

const PageLoader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center space-x-2">
      <LoaderCircle className="animate-spin" />
      Loading ...
    </div>
  )
}

export { Loader, PageLoader }
