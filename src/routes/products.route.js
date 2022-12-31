import express from "express";
import ProductsController from "../controller/products.controller.js";

const routerProducts = express.Router();

routerProducts.get('/:slug', ProductsController.getProductDetail);
routerProducts.get('/', ProductsController.getProducts);
routerProducts.post('/', ProductsController.postProducts);
routerProducts.put('/:id', ProductsController.updateProducts);
routerProducts.delete('/:id', ProductsController.deleteProducts);

export { routerProducts };
