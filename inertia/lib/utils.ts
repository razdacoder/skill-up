import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitial(value: string): string {
  const names = value.split(' ')
  return names[0][0] + names[1][0]
}
