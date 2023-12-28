"use client";

import React, { useEffect, useState } from "react";
import Pagination from "@/components/Utilities/Pagination";
import ListAnime from "@/components/ListAnime";
import { getAnimeResponse } from "../../libs/api-libs";
import HeaderMenu from "@/components/Utilities/HeaderMenu";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime",`page=${page}`)
    
    setTopAnime(populerAnime)
  };

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <ListAnime api={topAnime}/>
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
    </>
  );
};

export default Page;
