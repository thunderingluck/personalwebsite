import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { SurrealAura } from '@/components/ui/surreal-aura'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Nim - Personal website template',
    template: '%s | Nim'
  },
  description:  'Nim is a free and open-source personal website template built with Next.js 15, React 19 and Motion-Primitives.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-slate-50 text-slate-900 tracking-tight antialiased dark:bg-[#05060d] dark:text-slate-100`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="relative min-h-screen w-full overflow-hidden font-[family-name:var(--font-inter-tight)]">
            <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,#c8f5ff_0%,rgba(200,245,255,0)_36%),radial-gradient(circle_at_80%_15%,#ffe2f7_0%,rgba(255,226,247,0)_40%),radial-gradient(circle_at_40%_75%,#e1dbff_0%,rgba(225,219,255,0)_38%),linear-gradient(135deg,#eaf7ff_0%,#fdf4ff_38%,#e8ecff_100%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(34,211,238,0.25)_0%,rgba(17,94,89,0)_35%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.18)_0%,rgba(24,24,27,0)_42%),radial-gradient(circle_at_42%_82%,rgba(79,70,229,0.25)_0%,rgba(67,56,202,0)_38%),linear-gradient(145deg,#060915_0%,#0a1223_45%,#0f0c1f_100%)]" />
            <SurrealAura className="fixed inset-0 -z-10 opacity-90" />

            <div className="relative mx-auto flex min-h-screen max-w-6xl flex-1 px-4 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16">
              <div className="relative w-full overflow-hidden rounded-[32px] border border-white/60 bg-white/70 shadow-[0_30px_120px_-70px_rgba(15,23,42,0.65)] ring-1 ring-black/5 backdrop-blur-2xl dark:border-white/5 dark:bg-white/5 dark:shadow-[0_30px_120px_-70px_rgba(0,0,0,0.85)] dark:ring-white/5">
                <SurrealAura className="absolute inset-0 opacity-50" />
                <div className="relative mx-auto w-full max-w-4xl px-5 pb-14 pt-14 sm:px-8 md:px-12 lg:px-14">
                  <Header />
                  <div className="mt-12 md:mt-16">{children}</div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
