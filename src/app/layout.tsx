import './globals.css'
import { Baloo_Bhaina_2 } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const ballo = Baloo_Bhaina_2({ subsets: ['latin'] })

export const metadata = {
  title: 'Disney App',
  description: 'This is an app inspirated by Disney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ballo.className}>
        <NavBar />
        <main className='overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
