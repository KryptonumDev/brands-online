import ContactForm from "@/components/sections/contact/ContactForm";
import SchemaBreadcrumbs from "@/global/Schema/Breadcrumbs";
import Seo from "@/global/Seo";
import fetchData from "@/utils/fetchData";

// export const runtime = 'edge'

const pathname = '/contact';

const ContactPage = async () => {
  const { page: {
    hero_Heading,
    hero_Paragraph,
    hero_Hint,
    hero_Cta,
    step1_Heading,
    step1_Paragraph,
    step1_Options,
    step2_Heading,
    step2_Paragraph,
    step2_Options,
    step3_Heading,
    step3_Paragraph,
    step3_Options,
    step4_Heading,
    step4_Paragraph,
    success_Heading,
    success_Paragraph,
    success_Cta,
    error_Heading,
    error_Paragraph,
    error_Cta,
  }} = await getData();

  return (
    <>
      <ContactForm data={{
        hero_Heading,
        hero_Paragraph,
        hero_Hint,
        hero_Cta,
        step1_Heading,
        step1_Paragraph,
        step1_Options,
        step2_Heading,
        step2_Paragraph,
        step2_Options,
        step3_Heading,
        step3_Paragraph,
        step3_Options,
        step4_Heading,
        step4_Paragraph,
        success_Heading,
        success_Paragraph,
        success_Cta,
        error_Heading,
        error_Paragraph,
        error_Cta,
      }} />
      <SchemaBreadcrumbs {...[
        { name: 'Contact', path: pathname },
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
    page: ContactPage(id: "contactPage") {
        # Hero
      hero_Heading
      hero_Paragraph
      hero_Hint
      hero_Cta
        # Step 1
      step1_Heading
      step1_Paragraph
      step1_Options {
        title
        list
      }
        # Step 2
      step2_Heading
      step2_Paragraph
      step2_Options
        # Step 3
      step3_Heading
      step3_Paragraph
      step3_Options
        # Step 4
      step4_Heading
      step4_Paragraph
        # Success section
      success_Heading
      success_Paragraph
      success_Cta {
        theme
        text
        href
      }
        # Error section
      error_Heading
      error_Paragraph
      error_Cta
        # SEO
      seo {
        title
        description
      }
    }
  `)
  return data;
}

export default ContactPage;