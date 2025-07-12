'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return light version as default to avoid hydration mismatch
    return (
      <Image
        src="/ad-logo.svg"
        alt="Anderson Dapper Logo"
        width={getSizeDimensions(size).width}
        height={getSizeDimensions(size).height}
        className={`${getSizeClasses(size)} ${className}`}
      />
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <Image
      src={isDark ? '/ad-logo-dark.svg' : '/ad-logo.svg'}
      alt="Anderson Dapper Logo"
      width={getSizeDimensions(size).width}
      height={getSizeDimensions(size).height}
      className={`${getSizeClasses(size)} ${className}`}
    />
  )
}

function getSizeClasses(size: 'sm' | 'md' | 'lg'): string {
  switch (size) {
    case 'sm':
      return 'h-8 w-auto'
    case 'md':
      return 'h-12 w-auto'
    case 'lg':
      return 'h-16 w-auto'
    default:
      return 'h-12 w-auto'
  }
}

function getSizeDimensions(size: 'sm' | 'md' | 'lg'): { width: number; height: number } {
  switch (size) {
    case 'sm':
      return { width: 100, height: 32 }
    case 'md':
      return { width: 150, height: 48 }
    case 'lg':
      return { width: 200, height: 64 }
    default:
      return { width: 150, height: 48 }
  }
}