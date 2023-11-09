import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Padel Toernooi - Familia',
  description: 'Meld je snel aan voor het leukste padel toernooi van het jaar!',
  openGraph: {
    images: 'https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg'
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
