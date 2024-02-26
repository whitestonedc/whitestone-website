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
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
