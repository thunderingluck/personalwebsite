'use client'

import { cn } from '@/lib/utils'

type FlameShadowOverlayProps = {
  className?: string
}

export function FlameShadowOverlay({ className }: FlameShadowOverlayProps) {
  return (
    <>
      <span aria-hidden className={cn('flame-ember flame-ember-ripple', className)} />
      <span aria-hidden className="flame-ember flame-ember-flicker" />
    </>
  )
}
