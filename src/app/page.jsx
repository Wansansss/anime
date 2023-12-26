import ListAnime from "@/components/ListAnime"
import Header from "@/components/ListAnime/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime","limit=10")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recommendedAnime = reproduce(recommendedAnime,10)

  return (
    <>
    <section>
    <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
    <ListAnime api={topAnime}/>
    </section>
    <section>
    <Header title="Rekomendasi"/>
    <ListAnime api={recommendedAnime}/>
    </section>
    </>
  )
}

export default Page
