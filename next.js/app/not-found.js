// export const runtime = 'edge'

const NotFoundPage = async () => {
  // const { data: { homepage: {
  //   hero_Heading,
  // }}} = await getData();

  return (
    <>
      <h1>Not Found</h1>
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

export default NotFoundPage;