import { getAnimeResponse } from "@/libs/api-libs"
import ListAnime from "@/components/ListAnime"
import Header from "@/components/ListAnime/Header"

const Page = async ({params}) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)
  
  return (
    <>
    <section>
    <Header title={`Pencarian untuk ${decodedKeyword}...`}/>
    <ListAnime api={searchAnime}/>
    </section>
    </>
  )
}

export default Page
