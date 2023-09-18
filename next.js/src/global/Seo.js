import fetchData from "@/utils/fetchData";

export const domain = 'https://domain.com';
const locale = "pl_PL";

const Seo = async ({ title, description, url }) => {
  const { data: { global } } = await getData();

  const seo = {
    title: title || 'Brands Online',
    description: description || '',
    url: `${domain}${url}` || '',
    ogImage: global.seo?.og_Img.asset.url || ''
  }

  const metadata = {
    robots: {
      index: false,
    },
    metadataBase: new URL(domain),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.title,
      url: seo.url,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    themeColor: '#FDFBF8',
  }

  return metadata;
}

export default Seo;

const getData = async () => {
  const { body: { data } } = await fetchData(`
    global: Global(id: "global") {
      seo {
        og_Img {
          asset {
            url
          }
        }
      }
    }
  `)
  return { data };
}