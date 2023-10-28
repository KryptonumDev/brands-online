import '@/global/global.scss'
import localFont from 'next/font/local'
import Nav from '@/components/organisms/Nav'
import Footer from '@/components/organisms/Footer'
import SmoothScroll from '@/utils/SmoothScroll'
import SchemaOrganization from '@/global/Schema/Organization'
import MouseEffect from '@/components/atoms/MouseEffect'
import CookieConsent from '@/components/organisms/CookieConsent'
import fetchData from '@/utils/fetchData'

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

export default async function RootLayout({ children }) {
  const { global: {
    cookieConsent_Heading,
    cookieConsent_Description,
    cookieConsent_PreferencesTitle,
    cookieConsent_List,
  } } = await getData();

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
        <CookieConsent data={{
          cookieConsent_Heading,
          cookieConsent_Description,
          cookieConsent_PreferencesTitle,
          cookieConsent_List,
        }} />
      </body>
    </html>
  )
}

const getData = async () => {
  const { body: { data } } = await fetchData(`
    global: Global(id: "global") {
      cookieConsent_Heading
      cookieConsent_Description
      cookieConsent_PreferencesTitle
      cookieConsent_List {
        title
        description
      }
    }
  `)
  return data;
}