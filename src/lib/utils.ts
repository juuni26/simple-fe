import { clsx, type ClassValue } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateASP(dateString?: string): dayjs.Dayjs | null {
  if (!dateString) return null
  const milliseconds = parseInt(dateString.slice(6, -2))
  const date = dayjs(milliseconds)
  return date ? date : null
}
