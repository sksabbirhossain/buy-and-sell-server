const express = require("express");
const { addBooking, getBookings, getBookingByRoderId } = require("../controller/bookingsController");

const router = express.Router();

router.get("/get-bookings/:email", getBookings);
router.get("/get-booking/:id", getBookingByRoderId);
router.post("/add-booking", addBooking);

module.exports = router;
