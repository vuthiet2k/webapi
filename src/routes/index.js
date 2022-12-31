import { routerProducts } from "../routes/products.route.js";

const route = function (app) {
  app.use("/api/products", routerProducts);
};

export default route;
