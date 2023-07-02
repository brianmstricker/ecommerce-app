"use client";
import NewProduct from "@/components/NewProduct";
import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const Products = () => {
  const [show, setShow] = useState(false);
  return (
    <main>
      <h1 className="text-center text-4xl mb-8">Products</h1>
      <button
        onClick={() => {
          setShow(true);
        }}
        className="bg-gray-500 text-white h-[175px] w-[125px] flex items-center justify-center"
      >
        <BsPlusCircleFill size={56} />
      </button>
      <NewProduct show={show} onClose={() => setShow(false)} />
    </main>
  );
};
export default Products;
