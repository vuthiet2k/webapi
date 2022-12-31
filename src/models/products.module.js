import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, default: "" },
    price: { type: String, default: "" },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
);

const ProductModel = mongoose.model("products", Product);

export default ProductModel;
