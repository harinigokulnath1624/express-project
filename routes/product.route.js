const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const validateProduct = require("../middleware/validateProduct");
router.get("/", productController.getProducts);
router.post("/", validateProduct, productController.addProduct);
router.put("/:id", validateProduct, productController.editProduct);
router.delete("/:id", productController.removeProduct);
module.exports = router;
