import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://physicalinvestor.com'),
  title: {
    default: 'Physical Investor | Coming Soon',
    template: '%s | Physical Investor',
  },
  description:
    'A future resource for tangible assets, disciplined investing, and practical financial resilience.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://physicalinvestor.com/',
    siteName: 'Physical Investor',
    title: 'Physical Investor | Coming Soon',
    description:
      'A future resource for tangible assets, disciplined investing, and practical financial resilience.',
  },
  twitter: {
    card: 'summary',
    title: 'Physical Investor | Coming Soon',
    description:
      'A future resource for tangible assets, disciplined investing, and practical financial resilience.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
