'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="fire-ripple relative text-lg font-medium text-black transition-colors duration-300 hover:text-orange-500 focus-visible:text-orange-500 dark:text-white dark:hover:text-orange-300 dark:focus-visible:text-orange-300"
        >
          Julien Kim
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Design Engineer
        </TextEffect>
      </div>
    </header>
  )
}
