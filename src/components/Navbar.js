import Link from "next/link";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <>
      <nav className="max-w-[100rem] mx-auto py-4 flex justify-between items-center text-xl px-6 border-b border-black">
        <Link
          href="/"
          passHref
          className="flex items-center text-2xl md:text-4xl gap-2"
        >
          <h1>BUYBEST</h1>
          <AiOutlineShop />
        </Link>
        <ul className="flex gap-3 md:gap-10 items-center">
          {!session ? (
            <li className="hover:text-zinc-500">
              <Link
                href={"/signin"}
                passHref
                className="flex items-center gap-2"
              >
                <span className="text-2xl md:text-3xl">
                  <FaRegUser />
                </span>
                <span className="hidden md:block">Sign In</span>
              </Link>
            </li>
          ) : (
            <li className="hover:text-zinc-500 relative group">
              <Link
                href={"/profile"}
                passHref
                className="flex items-center gap-2"
              >
                <span className="text-2xl md:text-3xl">
                  <Image
                    src={session?.user?.image}
                    width={40}
                    height={40}
                    alt="profile image"
                    className="rounded-full object-contain"
                  />
                </span>
                <span className="hidden md:block">
                  Hi, {session?.user?.name}
                </span>
              </Link>
              <div className="absolute bg-transparent md:w-80 h-8">
                <div className="hidden max-w-80 group-hover:md:block absolute bg-slate-800 rounded-md shadow-lg py-2 px-4 text-neutral-200 text-lg mt-4 w-fit">
                  <ul>
                    <li>Signed in as: {session?.user?.email}</li>
                    <Link href={"/profile"} passHref>
                      <li>My Account</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </li>
          )}
          <li className="hover:text-zinc-500">
            <Link
              href={"/favorites"}
              passHref
              className="flex items-center gap-2"
            >
              <span className="text-2xl md:text-3xl">
                <BsHeart />
              </span>
              <span className="hidden md:block">Favorites</span>
            </Link>
          </li>
          <li className="hover:text-zinc-500">
            <Link href={"/cart"} passHref className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl">
                <RiShoppingCartLine />
              </span>
              <span className="hidden md:block">Cart</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
