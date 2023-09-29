import '@/global/global.scss'
import localFont from 'next/font/local'
import Nav from '@/components/organisms/Nav'
import Footer from '@/components/organisms/Footer'
import SmoothScroll from '@/utils/SmoothScroll'

const DMSans = localFont({
  src: [
    {
      path: '../assets/fonts/DMSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/DMSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ["sans-serif"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${DMSans.className}`}>
        <Nav />
        <SmoothScroll>
          <main id="main">
            {children}
          </main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  )
}