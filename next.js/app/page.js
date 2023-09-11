import Button from "@/components/atoms/Button"
import Fetch from "@/utils/fetchData"

// export const runtime = 'edge'

const IndexPage = async () => {
  // const { data: { homepage: {
  //   hero_Heading,
  // }}} = await getData();

  return (
    <main>
      
    </main>
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
  const { body: { data } } = await Fetch({query: `
    homepage: Homepage(id: "homepage") {
        
    }
  `,})
  return { data };
}

export default IndexPage;