const products = require("../models/products.model");

function getProducts() {
  return products;
}

function createProduct(name, price) {
  const product = {
    id: Date.now(),
    name,
    price,
  };
  products.push(product);
  return product;
}

function updateProduct(id, name, price) {
  const product = products.find((data) => data.id === Number(id));
  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }
  product.name = name || product.name;
  product.price = price || product.price;
  return product;
}

function deleteProduct(id) {
  const index = products.findIndex((data) => data.id === Number(id));
  if (index === -1) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }
  products.splice(index, 1);
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
