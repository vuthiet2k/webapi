import express from "express";
import { connectDB } from "../config/connectdb.js";
import route from "../routes/index.js";
import ProductsController from "../controller/products.controller.js";
// import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())
connectDB();

//route
route(app);

app.listen(3006, () => {
  console.log("listen port");
});
