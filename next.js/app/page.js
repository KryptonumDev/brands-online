

// export const runtime = 'edge'

import Hero from "@/components/sections/Homepage/Hero";
import Motivation from "@/components/sections/Homepage/Motivation";
import fetchData from "@/utils/fetchData";

const IndexPage = async () => {
  const { homepage: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
    motivation_Paragraph,
  }} = await getData();

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
      hero_Heading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
      motivation_Paragraph
    }
  `)
  return data;
}

export default IndexPage;