const express = require("express");
const { getBuyers } = require("../controller/buyerController");

const router = express.Router();

router.get("/get-allbuyers", getBuyers);

module.exports = router;
