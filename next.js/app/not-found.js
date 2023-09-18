
import Hero from "@/components/sections/notFound/Hero";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

export const runtime = 'edge'

const IndexPage = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
  }} = await getData();

  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Paragraph,
        hero_Cta,
      }} />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
  })
}

const getData = async () => {
  const { body: { data } } = await fetchData(`
    page: NotFoundPage(id: "notFoundPage") {
        #Hero
      hero_Heading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
    }
  `)
  return data;
}

export default IndexPage;