import express from "express";
import { connectDB } from "../config/connectdb.js";
import route from "../routes/index.js";
import ProductsController from "../controller/products.controller.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

//route
route(app);

app.listen(3000, () => {
  console.log("listen port");
});
