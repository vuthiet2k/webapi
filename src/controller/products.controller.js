import ProductModel from "../models/products.model.js";

class ProductsController {
  //GET /products
  getProducts(req, res) {
    ProductModel.find({}, function (err, products) {
      if (!err) {
        res.json(products);
        return;
      }
      res.status(400).send("error!!!");
    });
  }
  getProductDetail(req, res) {
    if (!req.params.slug) {
      return;
    }
    ProductModel.findOne({ _id: req.params.slug })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => res.send("error"));
  }
  postProducts(req, res) {
    const product = new ProductModel(req.body);
    console.log("body", req.body);
    if (!req.body.name) {
      res.status(400).send("Thiếu tên sản phẩm!!!");
      return;
    }
    product.save();
    res.status(201).json(product);
  }
  updateProducts(req, res) {
    ProductModel.updateOne({ _id: req.params.id }, req.body).then((product) => {
      res.json(product);
    });
  }
  deleteProducts(req, res) {
    ProductModel.deleteOne({ _id: req.params.id }).then((product) => {
      res.json(product);
    });
  }
}

export default new ProductsController();
