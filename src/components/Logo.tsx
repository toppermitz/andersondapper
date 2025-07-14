'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return logo as default to avoid hydration mismatch
    return (
      <Image
        src="/newlogotipo.svg"
        alt="Anderson Dapper Logo"
        width={getSizeDimensions(size).width}
        height={getSizeDimensions(size).height}
        className={`${getSizeClasses(size)} ${className}`}
      />
    )
  }

  return (
    <Image
      src="/newlogotipo.svg"
      alt="Anderson Dapper Logo"
      width={getSizeDimensions(size).width}
      height={getSizeDimensions(size).height}
      className={`${getSizeClasses(size)} ${className}`}
    />
  )
}

function getSizeClasses(size: 'sm' | 'md' | 'lg' | 'xl'): string {
  switch (size) {
    case 'sm':
      return 'h-8 w-auto'
    case 'md':
      return 'h-12 w-auto'
    case 'lg':
      return 'h-16 w-auto'
    case 'xl':
      return 'h-24 w-auto'
    default:
      return 'h-12 w-auto'
  }
}

function getSizeDimensions(size: 'sm' | 'md' | 'lg' | 'xl'): { width: number; height: number } {
  // The logo has approximately 1.73:1 aspect ratio (130.35:75.32 mm)
  switch (size) {
    case 'sm':
      return { width: 120, height: 69 }
    case 'md':
      return { width: 173, height: 100 }
    case 'lg':
      return { width: 230, height: 133 }
    case 'xl':
      return { width: 346, height: 200 }
    default:
      return { width: 173, height: 100 }
  }
}