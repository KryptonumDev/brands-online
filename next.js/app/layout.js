import '@/global/global.scss'
import localFont from 'next/font/local'
import Nav from '@/components/organisms/Nav'
import Footer from '@/components/organisms/Footer'
import GlobalScript from '@/global/global'

const Lato = localFont({
  src: [
    {
      path: '../src/assets/fonts/DMSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../src/assets/fonts/DMSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ["sans-serif"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${Lato.className}`}>
        <Nav />
        {children}
        <Footer />
        <GlobalScript />
      </body>
    </html>
  )
}