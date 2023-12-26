import { Signika } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const signika = Signika({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeSans',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${signika.className} bg-gradient-to-r from-indigo-500 via-yellow-400 to-green-500`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
