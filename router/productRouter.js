const express = require("express");
const {
  addProduct,
  getProduct,
  getMyProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/products/:id", getProduct);
router.get("/get-my-products", getMyProduct);
router.post("/add-product", addProduct);

module.exports = router;
