"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Button = ({ text, onClick, className, type }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-800 border-blue-800 border-2 text-white hover:bg-blue-500 hover:border-blue-500 transition ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
const SignOutButton = ({ className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-red-800 border-red-800 border-2 text-white hover:bg-red-500 hover:border-red-500 transition ${className}`}
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};

const LinkButton = ({ className, href, text, passHref }) => {
  return (
    <Link href={href} passHref={passHref}>
      <button
        className={`px-4 py-2 rounded-md bg-blue-800 border-blue-800 border-2 text-white hover:bg-blue-500 hover:border-blue-500 transition ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
export { SignOutButton, LinkButton };
