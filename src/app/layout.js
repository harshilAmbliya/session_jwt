
import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './providers/Sessionprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'jwt - session',
  description: 'jwt session',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider >
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
