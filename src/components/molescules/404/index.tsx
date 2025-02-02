export const NotFound = ({ message }: { message?: string }) => {
  return (
    <div className="flex h-full min-h-28 w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">404</div>
        <div className="text-lg">{message}</div>
      </div>
    </div>
  )
}
