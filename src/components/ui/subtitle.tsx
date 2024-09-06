import React from 'react'

interface SubtitleProps {
  children: React.ReactNode
  className?: string
}

export function Subtitle({ children, className = '' }: SubtitleProps) {
  return (
    <p className={`text-md md:text-lg lg:text-xl font-medium text-muted-foreground ${className}`}>
      {children}
    </p>
  )
}