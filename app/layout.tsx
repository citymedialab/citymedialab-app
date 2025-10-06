import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Splash from './components/Splash'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'citymedialab',
  description: '10 γρήγορες ειδήσεις της ημέρας',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={inter.className}>
        <Splash durationMs={3000} />
        <Header />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  )
}
