import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ben Osalira - Software Engineer Portfolio',
  description: 'Computer Science graduate specializing in full-stack development, distributed systems, and cloud architecture. View my projects including TheSchedulerApp, CareConnectED, and DayTradingPlatform.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'Computer Science', 'React', 'Next.js', 'TypeScript', 'Python', 'Go', 'Cloud Architecture'],
  authors: [{ name: 'Ben Osalira' }],
  openGraph: {
    title: 'Ben Osalira - Software Engineer Portfolio',
    description: 'Computer Science graduate specializing in full-stack development, distributed systems, and cloud architecture.',
    url: 'https://www.benosalira.com',
    siteName: 'Ben Osalira Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Osalira - Software Engineer Portfolio',
    description: 'Computer Science graduate specializing in full-stack development, distributed systems, and cloud architecture.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

