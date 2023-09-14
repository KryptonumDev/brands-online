import Button from "@/components/atoms/Button"
import Link from "@/components/atoms/Link"
import Fetch from "@/utils/fetchData"

// export const runtime = 'edge'

const IndexPage = async () => {
  // const { data: { homepage: {
  //   hero_Heading,
  // }}} = await getData();

  return (
    <main>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid? Qui, aperiam. Laborum odit mollitia perferendis totam autem, voluptas voluptatum? Vero iusto commodi dicta exercitationem incidunt esse voluptatem aspernatur dolorem, omnis sed! Eligendi, repudiandae deserunt. Iste asperiores aspernatur atque sapiente magni odio rem, tenetur ipsa eum commodi amet neque alias deleniti nam modi culpa possimus, officiis aperiam sed non quod dolores vero, a adipisci! A reprehenderit asperiores quae <Link href="">Lorem.</Link> et assumenda corrupti eius quis ut, unde possimus modi voluptatibus officia nihil illum sunt non, officiis porro tempora pariatur cumque hic commodi. Ut, dolor. Molestias molestiae voluptatibus enim hic nobis illo dolor voluptates libero modi, nemo harum officia quam blanditiis, aliquid expedita error, adipisci officiis! Consectetur illum id itaque explicabo inventore fugiat ad doloremque, est aut dolores soluta! Aliquam, sapiente amet. Assumenda, hic. Optio voluptate iure omnis, magni placeat velit. At, dignissimos, ea saepe cumque dolore ad accusamus magni tempora quae perspiciatis voluptatum neque earum vitae aliquam reiciendis illum doloribus ab! Eligendi earum explicabo veritatis fuga ipsam sunt dicta quasi fugit maiores commodi ducimus nihil, dolore ad reiciendis culpa mollitia nemo a. Nihil, aliquam est ipsa nemo voluptas ea! Ex eaque magni quia asperiores esse quibusdam dicta sint perferendis doloremque unde!</p>
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