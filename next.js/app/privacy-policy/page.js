
import Content from "@/components/sections/privacy-policy/Content";
import Hero from "@/components/sections/privacy-policy/Hero";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

export const runtime = 'edge'

const PrivacyPolicy = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_readingTime,
    content_List,
  }} = await getData();

  return (
    <>
      <Hero
        data={{
          hero_Heading,
          hero_Paragraph,
          hero_readingTime,
        }}
        content={content_List}
      />
      <Content content={content_List} />
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
    page: PrivacyPolicyPage(id: "privacyPolicyPage") {
        #Hero
      hero_Heading
      hero_Paragraph
      hero_readingTime
      content_List {
        title
        description
      }
    }
  `)
  return data;
}

export default PrivacyPolicy;