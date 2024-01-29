import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const highlightVariants = cva(
  "inline-flex items-center justify-center rounded-sm px-1 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "dark:text-lime-300 text-lime-600 bg-lime-300/50 dark:bg-lime-800/50 border-b-2 border-lime-600",
        teal:
          "dark:text-teal-300 text-teal-600 dark:bg-teal-800/50 bg-teal-300/50 border-b-2 border-teal-600",
        blue:
          "dark:text-blue-300 text-blue-600 dark:bg-blue-800/50 bg-blue-300/50 border-b-2 border-blue-600",
        violet:
          "dark:text-pink-300 text-pink-600 dark:bg-rose-800/50 bg-rose-300/50 border-b-2 border-b-pink-600",
        indigo: "dark:text-purple-200 text-purple-400 dark:bg-purple-800/50 bg-purple-200/50 border-b-2 border-b-purple-600",
        yellow: "dark:text-yellow-300 text-yellow-600 dark:bg-yellow-800/50 bg-yellow-300/50 border-b-2 border-b-yellow-600",
        black: "dark:text-gray-300 text-gray-600 dark:bg-gray-800/50 bg-gray-300/50 border-b-2 border-b-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface Props extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof highlightVariants>{
  children: React.ReactNode,
}

const Highlight = ({children, variant, className}: Props) => {
  return (
    <span className={cn(highlightVariants({variant, className}))}>{children}</span>
  )
}

export default Highlight;