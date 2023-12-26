import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"


const Page = async () => {
    const user = await authUserSession()
    

    return(
        <div className="flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
            <Image src={user?.image} alt="" width={350} height={350} />
        <div className="flex flex-wrap gap-4 py-8">
            <Link href="/users/dashboard/collection" className="bg-emerald-500 text-white text-xl hover:text-black hover:scale-105 transition-all shadow-lg rounded-full font-bold py-1 px-10 inline-block">My Collection</Link>
            <Link href="/users/dashboard/comment" className="bg-emerald-500 text-white text-xl hover:text-black hover:scale-105 transition-all shadow-lg rounded-full font-bold py-1 px-10 inline-block">My Comment</Link>
        </div>
        
        </div>
    )
}

export default Page