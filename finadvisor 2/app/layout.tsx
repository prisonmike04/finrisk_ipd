import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// Update the import path to point to the correct location
import '../src/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FinRisk - Financial Risk Assessment Platform',
  description: 'Advanced risk assessment for government and public startups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}