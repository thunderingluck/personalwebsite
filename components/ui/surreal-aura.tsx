'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

type SurrealAuraProps = {
  className?: string
  density?: 'sparse' | 'dense'
}

export function SurrealAura({ className, density = 'dense' }: SurrealAuraProps) {
  const sharedTransition = {
    duration: 18,
    repeat: Infinity,
    repeatType: 'mirror' as const,
    ease: 'easeInOut',
  }

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 -z-10 overflow-visible',
        'mix-blend-screen dark:mix-blend-normal',
        className,
      )}
    >
      <motion.div
        className="absolute -left-10 top-4 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#9ae6ff,transparent_58%)] opacity-80 blur-[68px] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.7),transparent_58%)]"
        animate={{
          x: [-26, 24, -12],
          y: [-12, 18, -24],
          scale: [1, 1.1, 1],
        }}
        transition={sharedTransition}
      />
      <motion.div
        className="absolute right-4 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_60%_30%,#ffd6f0,transparent_55%)] opacity-70 blur-[70px] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(236,72,153,0.48),transparent_55%)]"
        animate={{
          x: [24, -16, 18],
          y: [14, -22, 20],
          rotate: [0, 10, -8],
          scale: [1.05, 0.95, 1.08],
        }}
        transition={{ ...sharedTransition, duration: 16 }}
      />
      <motion.div
        className="absolute bottom-2 left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_50%_60%,#dfe3ff,transparent_60%)] opacity-70 blur-[72px] dark:bg-[radial-gradient(circle_at_50%_60%,rgba(99,102,241,0.6),transparent_60%)]"
        animate={{
          x: [-10, 12, -18],
          y: [18, -16, 20],
          rotate: [-4, 8, -6],
        }}
        transition={{ ...sharedTransition, duration: 20 }}
      />

      {density === 'dense' && (
        <>
          <motion.div
            className="absolute -bottom-6 right-8 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_40%_40%,#b9ffe5,transparent_60%)] opacity-60 blur-[72px] dark:bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.55),transparent_60%)]"
            animate={{
              x: [12, -8, 10],
              y: [-18, 14, -12],
              scale: [1, 1.08, 0.96],
            }}
            transition={{ ...sharedTransition, duration: 22 }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_58%_80%,rgba(255,255,255,0.2),transparent_45%)] mix-blend-soft-light" />
        </>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_50%,rgba(255,255,255,0.1)_100%)] opacity-60 dark:opacity-35" />
    </div>
  )
}
