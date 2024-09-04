import tailwindConfig from 'tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const fullConfig = resolveConfig(tailwindConfig)

export function getTailwindBreakpoints() {
  const breakpoints = fullConfig.theme.screens

  return {
    sm: parseInt(breakpoints.sm),
    md: parseInt(breakpoints.md),
    lg: parseInt(breakpoints.lg),
    xl: parseInt(breakpoints.xl),
    '2xl': parseInt(breakpoints['2xl'])
  }
}