const { Schema, models, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, min: 1, max: 150 },
    price: { type: Number, required: true },
    description: { type: String, required: true, min: 1, max: 150 },
    brand: String,
    category: { type: String, lowercase: true },
    colors: [String],
    images: [String],
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;
