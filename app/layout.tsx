import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Wagmi from './wagmi'
import { ThemeProvider } from './theme'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Wagmi>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Wagmi>
      </body>
    </html>
  )
}