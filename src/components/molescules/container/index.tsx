export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="container mx-auto mt-10 flex flex-col gap-4 rounded-md border px-4 py-2">
        {children}
      </div>
    </div>
  )
}
