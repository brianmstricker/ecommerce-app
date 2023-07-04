"use client";
import axios from "axios";
import { useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CldUploadWidget } from "next-cloudinary";
import { AiOutlineUpload } from "react-icons/ai";

const FormGroup = ({ children }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center">
    {children}
  </div>
);
const NewProduct = ({ show, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    description: "",
    brand: "",
    category: "",
    colors: [],
    images: [],
  });
  function updateForm(key) {
    return (e) => {
      setForm({ ...form, [key]: e.target.value });
    };
  }
  const handleUpload = useCallback(
    (results) => {
      const images = results.info.secure_url;
      setForm({ ...form, images: [...form.images, images] });
    },
    [form]
  );
  async function submitForm(e) {
    e.preventDefault();
    const { colors, ...rest } = form;
    const product = {
      ...rest,
      colors: colors.split(/[ ,]+/),
    };
    try {
      await axios.post("/api/products", product);
      setForm({
        name: "",
        price: 0,
        description: "",
        brand: "",
        category: "",
        colors: [],
        images: [],
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  if (!show) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white relative px-4 py-2 rounded-md sm:w-[35rem] lg:w-[40rem] mt-24 md:mt-0"
      >
        <h1 className="text-center text-4xl mb-8 mr-6 mt-2">Add a Product</h1>
        <button onClick={onClose} className="absolute right-0 top-0">
          <IoClose size={30} />
        </button>
        <form onSubmit={submitForm} className="flex flex-col gap-2 w-full">
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter product name"
              className="border border-gray-400 rounded-md px-2 py-1 max-w-[200px]"
              value={form.name}
              onChange={updateForm("name")}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter product price"
              className="border border-gray-400 rounded-md px-2 py-1 max-w-[200px]"
              value={form.price}
              onChange={updateForm("price")}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter product description"
              className="border border-gray-400 rounded-md px-2 py-1 max-w-[200px] resize-none"
              rows={4}
              value={form.description}
              onChange={updateForm("description")}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="Enter product brand"
              className="border border-gray-400 rounded-md px-2 py-1 max-w-[200px]"
              value={form.brand}
              onChange={updateForm("brand")}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Enter product category"
              className="border border-gray-400 rounded-md px-2 py-1 max-w-[200px]"
              value={form.category}
              onChange={updateForm("category")}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="colors">Colors</label>
            <input
              type="text"
              name="colors"
              id="colors"
              placeholder="Enter product colors"
              className="border border-gray-400 rounded-md px-2 py-1 max-w-[200px]"
              value={form.colors}
              onChange={updateForm("colors")}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="images">Image(s)</label>
            <CldUploadWidget
              onUpload={handleUpload}
              uploadPreset="no7neva9"
              options={{
                maxFiles: 10,
                resourceType: "image",
              }}
            >
              {({ open }) => {
                return (
                  <button
                    type="button"
                    onClick={() => open?.()}
                    className="border border-gray-400 rounded-md px-2 py-1 max-w-[200px] w-full flex items-center justify-center flex-col"
                  >
                    <AiOutlineUpload size={32} />
                    <span className="font-bold">Upload</span>
                  </button>
                );
              }}
            </CldUploadWidget>
          </FormGroup>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Add Product
          </button>
          {}
        </form>
      </div>
    </div>
  );
};
export default NewProduct;
