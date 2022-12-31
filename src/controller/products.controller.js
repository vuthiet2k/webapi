import ProductModel from "../models/products.module.js";

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
    ProductModel.findOne({ _id: req.params.slug }).then((product) => {
      res.json(product);
    });
  }
  postProducts(req, res) {
    const product = new ProductModel(req.body);
    console.log("body", req.body);
    product.save();
  }
  updateProducts(req, res) {
    ProductModel.updateOne({ _id: req.params.id }, req.body)
      .then((product) => {
        res.json(product);
      });
  }
  deleteProducts(req, res) {
    ProductModel.deleteOne({ _id: req.params.id })
      .then((product) => {
        res.json(product);
      });
  }
}

export default new ProductsController();
