import '@/global/global.scss'
import localFont from 'next/font/local'
import Nav from '@/components/organisms/Nav'
import Footer from '@/components/organisms/Footer'
import SmoothScroll from '@/utils/SmoothScroll'
import SchemaOrganization from '@/global/Schema/Organization'
import MouseEffect from '@/components/atoms/MouseEffect'

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
      <head>
        <SchemaOrganization />
      </head>
      <body className={`${DMSans.className}`}>
        <Nav />
        <SmoothScroll>
          <main id="main">
            {children}
          </main>
        </SmoothScroll>
        <Footer />
        <MouseEffect />
      </body>
    </html>
  )
}