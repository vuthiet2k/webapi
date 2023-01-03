import { routerProducts } from "../routes/products.route.js";
import routerUser from "../routes/user.route.js"

const route = function (app) {
  app.use("/api/products", routerProducts);
  app.use("/api/users", routerUser);
};

export default route;
