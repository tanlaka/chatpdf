import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AskPDF',
  description: 'Start conversing with your documents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
        <body className={cn(
          'min-h-screen font-sans antialiased grainy scroll-smooth',
          inter.className
        )}>
          <Navbar></Navbar>
          {children}
        </body>
      </Providers>
    </html>
  )
}
