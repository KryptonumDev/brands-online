import Experience from "@/components/sections/about/Experience";
import Hero from "@/components/sections/about/Hero";
import MeetUs from "@/components/sections/about/MeetUs";
import SchemaBreadcrumbs from "@/global/Schema/Breadcrumbs";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

const pathname = '/about';

// export const runtime = 'edge'

const AboutPage = async () => {
  const {
    page: {
      hero_Heading,
      hero_Paragraph,
      hero_Cta,
      experience_List,
      meetUs_Tag,
      meetUs_Heading,
      meetUs_Paragraph,
      meetUs_Cta,
      meetUs_Projects,
    },
  } = await getData();
  return (
    <>
      <Hero data={{
        hero_Heading,
        hero_Paragraph,
        hero_Cta,
      }} />
      <Experience data={{
        experience_List
      }} />
      <MeetUs data={{
        meetUs_Tag,
        meetUs_Heading,
        meetUs_Paragraph,
        meetUs_Cta,
        meetUs_Projects,
      }} />
      <SchemaBreadcrumbs breadcrumbs={[
        { name: 'About', path: pathname },
      ]} />
    </>
  )
}

export async function generateMetadata() {
  const { page: { seo } } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    url: pathname,
  })
}

const getData = async () => {
  const { body: { data } } = await fetchData(`
    page: AboutPage(id: "aboutPage") {
        # Hero
      hero_Heading
      hero_Paragraph
      hero_Cta {
        theme
        text
        href
      }
        # Experience
      experience_List {
        number
        title
        description
      }
        # Meet Us
      meetUs_Tag
      meetUs_Heading
      meetUs_Paragraph
      meetUs_Cta {
        theme
        text
        href
      }
      meetUs_Projects {
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
        # SEO
      seo {
        title
        description
      }
    }
  `)
  return data;
}

export default AboutPage;