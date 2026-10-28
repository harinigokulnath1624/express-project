const productService = require("../services/products.services");

const getProducts = (req, res, next) => {
  try {
    const products = productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const addProduct = (req, res, next) => {
  try {
    const { name, price } = req.body;
    const product = productService.createProduct(name, price);
    res.status(201).json({ message: "Product added" }, product);
  } catch (error) {
    next(error);
  }
};

const editProduct = (req, res, next) => {
  try {
    const { name, price } = req.body;
    const product = productService.updateProduct(req.params.id, name, price);
    res.status(200).json({ message: "Product updated" }, product);
  } catch (error) {
    next(error);
  }
};

const removeProduct = (req, res, next) => {
  try {
    productService.deleteProduct(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  addProduct,
  editProduct,
  removeProduct,
};
