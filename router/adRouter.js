const express = require("express");
const { addAdvertise, getAdvertise } = require("../controller/adController");

const router = express.Router();

router.get("/my-product/get-advertise", getAdvertise);
router.post("/my-product/advertise", addAdvertise);

module.exports = router;
