const express = require("express");
const { addPayment } = require("../controller/paymentController");

const router = express.Router();

router.post("/add-payment", addPayment);

module.exports = router;
