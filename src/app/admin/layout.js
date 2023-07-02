"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";

const Links = [
  { name: "Products", href: "/admin/products" },
  { name: "Categories", href: "/admin/categories" },
  { name: "Orders", href: "/admin/orders" },
];
const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const path = usePathname();
  return (
    <div className="flex max-w-[100rem] min-h-[90vh] mx-auto py-4 relative">
      <LiaBarsSolid
        onClick={() => setMenu(!menu)}
        className={`md:hidden text-3xl z-20 mt-1 ml-1 ${
          menu ? "text-white" : ""
        }`}
      />
      <aside className="border-blue-600 border-2 rounded-lg max-w-[375px] p-4 px-6 ml-2 hidden md:block">
        <Link href="/admin">
          <h1 className="text-4xl border-b-[1px] border-gray-400">Dashboard</h1>
        </Link>
        <ul className="text-2xl mt-6">
          {Links.map((link) => (
            <Link href={link.href} key={link.name}>
              <li
                className={`mt-4 hover:border-r-4 border-gray-400 ${
                  path === link.href ? "border-r-4 border-gray-400" : ""
                }`}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </aside>
      {menu && (
        <div className="bg-black/90 text-white w-screen min-h-[92vh] p-4 absolute right-0 top-0 md:hidden text-center z-10">
          <Link href="/admin">
            <h1 className="text-4xl ml-3 underline underline-offset-4">
              Dashboard
            </h1>
          </Link>
          <ul className="text-2xl mt-6">
            {Links.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                onClick={() => setMenu(false)}
              >
                <li
                  className={`mt-4 hover:border-r-4 border-gray-400 ${
                    path === link.href ? "border-r-4 border-gray-400" : ""
                  }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      <div className="flex-grow p-4 md:pl-8">{children}</div>
    </div>
  );
};
export default Layout;
