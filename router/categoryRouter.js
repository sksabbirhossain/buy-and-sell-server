const express = require("express");
const router = express.Router();

const {
  getCategory,
  addCategory,
} = require("../controller/categoryController");

//get all categories
router.get("/allcategories", getCategory);

// add category
router.post("/add-category", addCategory);

module.exports = router;
