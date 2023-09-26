import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

// export const runtime = 'edge'

const ClientsPage = async () => {
  const {
    page: {
      hero_Heading,
      hero_Paragraph,
      hero_Cta,
    },
    partners
  } = await getData();
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Paragraph,
        hero_Cta,
      }} />
      <Clients data={partners} />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    url: '/clients'
  })
}

const getData = async () => {
  const { body: { data } } = await fetchData(`
    page: ClientsPage(id: "clientsPage") {
        #Hero
      hero_Heading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
        # SEO
      seo {
        title
        description
      }
    }
    partners: allPartners(sort: { _createdAt: DESC}) {
      img {
        asset {
          altText
          url
          metadata {
            lqip
            dimensions {
              width
              height
            }
          }
        }
      }
      name
      href
    }
  `)
  return data;
}

export default ClientsPage;