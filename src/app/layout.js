/* eslint-disable @next/next/no-sync-scripts */
import { Montserrat } from 'next/font/google'
import './globals.css'
import './assets/scss/style.scss';
import './assets/scss/bootstrap.scss';
import './assets/css/materialdesignicons.min.css'

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'WhiteStone - Dental Clinic',
  description: 'WhiteStone - Dental Clinic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
      </body>
    </html>
  )
}
