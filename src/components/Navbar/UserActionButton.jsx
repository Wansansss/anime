import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-4">
            {
                user ?  <Link className="font-xl font-bold bg-emerald-500 py-1 px-10 inline-block hover:scale-105 transition-all shadow-lg rounded-full hover:text-black text-white"  href="/users/dashboard">Dashboard</Link> : null
            }
           
            <Link href={actionURL} className="font-xl font-bold bg-emerald-500 py-1 px-10 inline-block hover:scale-105 transition-all shadow-lg rounded-full hover:text-black text-white">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton