import { ArrowLeftIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const BackHome = ({ className }: { className?: string }) => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className={cn('flex w-full justify-end', className)}>
      <div className="flex items-center gap-1">
        <Button variant="link" className="gap-x-1" onClick={goBack}>
          <ArrowLeftIcon className="h-4 w-4" />
          Back
        </Button>

        <Button variant="link" asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}
