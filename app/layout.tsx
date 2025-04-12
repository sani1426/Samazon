import type { Metadata } from 'next'

import './globals.css'
import localFont from 'next/font/local'

import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'

const myFont = localFont({ src: '../public/font/Poppins-Medium.ttf' })

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
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
