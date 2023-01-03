import express from "express";
import multer from "multer";
import ProductsController from "../controller/products.controller.js";

let upload = multer();
const routerProducts = express.Router();

routerProducts.get("/:slug", ProductsController.getProductDetail);
routerProducts.get("/", ProductsController.getProducts);
routerProducts.post("/", ProductsController.postProducts);
routerProducts.put("/:id", ProductsController.updateProducts);
routerProducts.delete("/:id", ProductsController.deleteProducts);

export { routerProducts };
