import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header>
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-4 bg-gradient-to-r  from-indigo-500 via-yellow-400 to-green-500">
        <Link href="/" className="font-bold text-white text-2xl underline hover:text-black hover:scale-105 transition-all shadow-xl">
          ANIMESANS
        </Link>
        <InputSearch/>
        <UserActionButton/>
      </div>
    </header>
  );
};

export default Navbar;
