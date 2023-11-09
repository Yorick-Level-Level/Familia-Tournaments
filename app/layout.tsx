import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Padel Toernooi - Familia',
  description: 'Meld je snel aan voor het leukste padel toernooi van het jaar!',
  openGraph: {
    images: 'https://img.freepik.com/free-vector/hand-drawn-padel-logo_23-2149205638.jpg?w=826&t=st=1699561089~exp=1699561689~hmac=38563d0e3937ad7d5b874ef57647b99131637e969c72aee6020bfb7316d6b9c5'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom-grey`}>{children}</body>
    </html>
  )
}
