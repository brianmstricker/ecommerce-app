"use client";
import Link from "next/link";
import { AiOutlineShop } from "react-icons/ai";
import Button from "./Button";
import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";

const RightLinks = [
  { name: "Sign In", icon: <FaRegUser /> },
  { name: "Favorites", icon: <BsHeart /> },
  { name: "Cart", icon: <RiShoppingCartLine /> },
];
const MiddleLinks = [
  { name: "Home" },
  { name: "Products" },
  { name: "Categories" },
];
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="max-w-[100rem] mx-auto py-4 flex justify-between items-center text-xl px-6">
        <Link href="/" className="flex items-center text-2xl md:text-4xl gap-2">
          <h1>BUYBEST</h1>
          <AiOutlineShop />
        </Link>
        <ul className="flex gap-3 md:gap-10 items-center">
          {RightLinks.map((link) => (
            <li key={link.name} className="hover:text-neutral-200">
              <Link
                href={
                  link.name === "Home"
                    ? "/"
                    : link.name.toLowerCase().split(" ").join("")
                }
                className="flex items-center gap-1"
              >
                <span className="text-2xl md:text-3xl">{link.icon}</span>
                <span className="hidden md:block">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <div className="flex max-w-[100rem] mx-auto justify-center items-center gap-5 pt-8">
          {MiddleLinks.map((link) => (
            <Link
              key={link.name}
              href={link.name === "Home" ? "/" : link.name.toLowerCase()}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
