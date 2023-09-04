import { Toolbar } from '@mui/material'
import ThemeRegistry from './ThemeRegistry'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tellect',
  description: 'Virtual Collaboration and Events Space',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeRegistry options={{ key: 'mui' }}>
          <Navbar />
          <Toolbar/>
       
          {children}
        </ThemeRegistry>



      </body>
    </html>
  )
}
