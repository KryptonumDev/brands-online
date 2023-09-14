// export const runtime = 'edge'



const ContactPage = async () => {
  // const { data: { homepage: {
  //   hero_Heading,
  // }}} = await getData();

  return (
    <>
      Contact
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

// const getData = async () => {
//   const { body: { data } } = await Fetch({query: `
//     homepage: Homepage(id: "homepage") {

//     }
//   `,})
//   return { data };
// }

export default ContactPage;