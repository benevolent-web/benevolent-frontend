import React from 'react'

interface TitleProps {
  children: React.ReactNode
  className?: string
}

export function Title({ children, className = '' }: TitleProps) {
  return (
    <p className={`text-4xl md:text-6xl lg:text-8xl font-medium ${className}`}>
      {children}
    </p>
  )
}