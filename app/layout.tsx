import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

// ⚠️ Relative imports, επειδή τα components βρίσκονται μέσα στο /app/components
import Header from './components/Header'
import Splash from './components/Splash'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QR City',
  description: 'QR-powered city experiences',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className="h-full">
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <Splash />
        <Header />
        {/* Δίνουμε “αέρα” κάτω από το fixed header */}
        <div className="pt-[48px] md:pt-[56px]">
          {children}
        </div>
      </body>
    </html>
  )
}
