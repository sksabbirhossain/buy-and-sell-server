const express = require("express");
const { addAdvertise } = require("../controller/adController");

const router = express.Router();

router.post("/my-product/advertise", addAdvertise);

module.exports = router;
