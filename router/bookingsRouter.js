const express = require("express");
const { addBooking } = require("../controller/bookingsController");

const router = express.Router();

router.post("/add-booking", addBooking);

module.exports = router;
