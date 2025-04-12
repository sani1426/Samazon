import type { Metadata } from 'next'

import './globals.css'
import { Poppins } from 'next/font/google'

import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'

const poppins = Poppins({
  variable: '--font-poppins-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
