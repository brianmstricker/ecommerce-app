"use client";
import Link from "next/link";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";

const Links = [
  { name: "Sign In", icon: <FaRegUser /> },
  { name: "Favorites", icon: <BsHeart /> },
  { name: "Cart", icon: <RiShoppingCartLine /> },
];
const Navbar = () => {
  return (
    <>
      <nav className="max-w-[100rem] mx-auto py-4 flex justify-between items-center text-xl px-6 border-b border-black">
        <Link href="/" className="flex items-center text-2xl md:text-4xl gap-2">
          <h1>BUYBEST</h1>
          <AiOutlineShop />
        </Link>
        <ul className="flex gap-3 md:gap-10 items-center">
          {Links.map((link) => (
            <li key={link.name} className="hover:text-zinc-700">
              <Link
                href={
                  link.name === "Home"
                    ? "/"
                    : link.name.toLowerCase().split(" ").join("")
                }
                className="flex items-center gap-2"
              >
                <span className="text-2xl md:text-3xl">{link.icon}</span>
                <span className="hidden md:block">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
