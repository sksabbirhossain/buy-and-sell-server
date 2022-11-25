const express = require("express");
const { addProduct, getProduct } = require("../controller/productController");

const router = express.Router();

router.get("/products/:id", getProduct)
router.post("/add-product", addProduct);

module.exports = router;
