'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type FlameButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const FlameButton = forwardRef<HTMLButtonElement, FlameButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'flame-button relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(249,115,22,0.35)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950',
          className,
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span aria-hidden>🔥</span>
          <span>{children}</span>
        </span>
      </button>
    )
  },
)

FlameButton.displayName = 'FlameButton'
