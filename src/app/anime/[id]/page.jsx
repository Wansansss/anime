import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/ListAnime/CollectionsButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/ListAnime/CommentInput";
import UserComment from "@/components/ListAnime/UserComment";

const Page = async ({ params }) => {
  const { id } = params
  const anime = await getAnimeResponse(`anime/${ id }`);
  const user = await authUserSession();
  const collection = await prisma.collection
  .findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  })
  .withAccelerateInfo();
 
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl font-bold">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>

      <div className="pt-4 px-4 flex gap-2 overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-orange-500 p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-green-500 p-2">
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-green-500 p-2">
          <h3>ANGGOTA</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-md border border-green-500 p-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={350}
          height={350}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-2xl mb-2">Komentar Penonton : </h3>
        <UserComment anime_mal_id={id} />

        {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
