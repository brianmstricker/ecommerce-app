"use client";
import { getProducts } from "@/app/page";
import NewProduct from "@/components/NewProduct";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const Products = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
    }
    fetchProducts();
  }, []);
  return (
    <main>
      <h1 className="text-center text-4xl mb-8">Products</h1>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setShow(true);
          }}
          className="border-gray-400 border-2 text-blue-600 h-[225px] w-[150px] flex items-center justify-center flex-col gap-2"
        >
          <BsPlusCircleFill size={56} />
          <span className="text-black font-bold">Add Product</span>
        </button>
        <NewProduct show={show} onClose={() => setShow(false)} />
        {products.map((product) => (
          <div
            key={product._id}
            className="border-gray-400 border-2 text-blue-600 h-[225px] w-[150px] flex items-center justify-center flex-col gap-2"
          >
            <Image
              src={product.images[0]}
              width={150}
              height={225}
              alt={product.description}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
export default Products;
