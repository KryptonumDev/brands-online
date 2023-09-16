

// export const runtime = 'edge'

import Clients from "@/components/sections/Homepage/Clients";
import Hero from "@/components/sections/Homepage/Hero";
import Motivation from "@/components/sections/Homepage/Motivation";
import fetchData from "@/utils/fetchData";

const IndexPage = async () => {
  const {
    homepage: {
      hero_Heading,
      hero_Paragraph,
      hero_Cta,
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

// export async function generateMetadata() {
//   const { data: { homepage: { seo } } } = await getData();
//   return Seo({
//     title: seo?.title,
//     description: seo?.description,
//     url: '/'
//   })
// }

const getData = async () => {
  const { body: { data } } = await fetchData(`
    homepage: Homepage(id: "homepage") {
        #Hero
      hero_Heading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
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