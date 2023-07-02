import Link from "next/link";

const Links = [{ name: "Home" }, { name: "Products" }, { name: "Categories" }];
export default function Home() {
  return (
    <main className="max-w-[100rem] mx-auto px-4 lg:px-2">
      <nav className="flex flex-col">
        <div className="flex justify-center items-center gap-5 pt-8">
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.name === "Home" ? "/" : link.name.toLowerCase()}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="bg-gray-700 w-[60vw] mx-auto h-[1px] mt-3" />
      </nav>
    </main>
  );
}
