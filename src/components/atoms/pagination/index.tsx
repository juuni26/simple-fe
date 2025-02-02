import { Button } from '@/components/ui/button'

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Number(page) - 1)}
        disabled={page === 1}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Number(page) + 1)}
        disabled={page >= totalPages}
      >
        Next
      </Button>
    </div>
  )
}
