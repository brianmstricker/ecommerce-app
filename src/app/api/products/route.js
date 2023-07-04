import { connect } from "@/lib/connect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connect();
    const { name, price, description, brand, category, colors, images } =
      await request.json();
    const product = await Product.create({
      name,
      price,
      description,
      brand,
      category,
      colors,
      images,
    });
    return NextResponse.json({ product, status: 201 });
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function GET() {
  try {
    await connect();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.error(error);
  }
}
