import Link from "next/link";
import { AiOutlineShop } from "react-icons/ai";

const Links = ["Home", "Products", "Categories", "Account", "Cart"];
const Navbar = () => {
  return (
    <nav className="max-w-[100rem] mx-auto my-4 flex justify-between items-center text-xl">
      <Link href="/" className="flex items-center text-4xl gap-2">
        <h1>BUYBEST</h1>
        <AiOutlineShop />
      </Link>
      <ul className="flex gap-3">
        {Links.map((link) => (
          <li key={link}>
            <Link href={link === "Home" ? "/" : link.toLowerCase()}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
