import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Splash from '@/components/Splash'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QR City',
  description: 'QR-powered city experiences',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={inter.className}>
        <Splash />
        <Header />
        {children}
      </body>
    </html>
  )
}
