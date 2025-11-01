import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chris Carr | Travel Creator & Operator',
  description: 'Portfolio of Chris Carr - Travel Creator & Operator. Showcasing projects, testimonials, and expertise in travel content creation and operations.',
  keywords: ['Chris Carr', 'Travel Creator', 'Travel Operator', 'Portfolio', 'Content Creator'],
  authors: [{ name: 'Chris Carr' }],
  openGraph: {
    title: 'Chris Carr | Travel Creator & Operator',
    description: 'Portfolio of Chris Carr - Travel Creator & Operator',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

