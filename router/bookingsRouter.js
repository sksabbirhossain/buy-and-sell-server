const express = require("express");
const { addBooking, getBookings } = require("../controller/bookingsController");

const router = express.Router();

router.get("/get-bookings", getBookings);
router.post("/add-booking", addBooking);

module.exports = router;
