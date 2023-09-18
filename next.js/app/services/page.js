import Clients from "@/components/sections/services/Clients";
import Hero from "@/components/sections/services/Hero";
import Services from "@/components/sections/services/Services";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

// export const runtime = 'edge'

const ServicesPage = async () => {
  const {
    page: {
      hero_Tag,
      hero_Heading,
      services_List,
      services_Cta,
      clients_Tag,
      clients_Heading,
    },
    partners
  } = await getData();

  return (
    <>
      <Hero data={{
        hero_Tag,
        hero_Heading
      }} />
      <Services data={{
        services_List,
        services_Cta,
      }} />
      <Clients
        data={{
          clients_Tag,
          clients_Heading,
        }}
        partners={partners}
      />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    url: '/services'
  })
}

const getData = async () => {
  const { body: { data } } = await fetchData(`
    page: ServicesPage(id: "servicesPage") {
        #Hero
      hero_Tag
      hero_Heading
        # Services
      services_List {
        title
        tags
        description
      }
      services_Cta {
        theme
        text
        href
      }
        # Clients
      clients_Tag
      clients_Heading
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

export default ServicesPage;