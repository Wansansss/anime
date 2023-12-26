"use client"

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <FileSearch size={44} className="text-indigo-500"/>
        <h1 className="text-indigo-500 text-4xl font-bold">NOT FOUND</h1>
        <button onClick={()=> router.back()}  className="underline hover:scale-105 hover:text-indigo-500 transition-all">
            Kembali Ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default Page;
