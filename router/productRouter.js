const express = require("express");
const { addProduct } = require("../controller/productController");

const router = express.Router();

router.post("/add-product", addProduct);

module.exports = router;
