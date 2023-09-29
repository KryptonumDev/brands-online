import Hero from "@/components/sections/homepage/Hero";
import Clients from "@/components/sections/homepage/Clients";
import Motivation from "@/components/sections/homepage/Motivation";
import Services from "@/components/sections/homepage/Services";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

// export const runtime = 'edge'

const IndexPage = async () => {
  const {
    page: {
      hero_Heading,
      hero_Paragraph,
      hero_Cta,
      services_Tag,
      services_Heading,
      services_Paragraph,
      services_Cta,
      services_List,
      motivation_Paragraph,
      clients_Tag,
      clients_Heading,
      clients_Paragraph,
      clients_Cta,
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
      <Services data={{
        services_Tag,
        services_Heading,
        services_Paragraph,
        services_Cta,
        services_List,
      }} />
      <Motivation data={{
        motivation_Paragraph
      }} />
      <Clients data={{
        clients_Tag,
        clients_Heading,
        clients_Paragraph,
        clients_Cta,
        partners,
      }} />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    url: ''
  })
}

const getData = async () => {
  const { body: { data } } = await fetchData(`
    page: IndexPage(id: "indexPage") {
        #Hero
      hero_Heading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
        # Services
      services_Tag
      services_Heading
      services_Paragraph
      services_Cta {
        theme
        text
        href
      }
      services_List {
        title
        description
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
      }
        # Motivation
      motivation_Paragraph
        # Clients
      clients_Tag
      clients_Heading
      clients_Paragraph
      clients_Cta {
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
    partners: allPartners(limit: 6, sort: { _createdAt: DESC}) {
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

export default IndexPage;