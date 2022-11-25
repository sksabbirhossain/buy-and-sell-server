const { bookingsCollection } = require("../database/databaseConnection");

//get bookings
async function getBookings(req, res, next) {
  try {
    const query = {};
    const allBookings = await bookingsCollection.find(query).toArray();
    res.send({
      success: true,
      data: allBookings,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

//add booking
async function addBooking(req, res, next) {
  try {
    const data = req.body;
    const users = await bookingsCollection.insertOne(data);
    res.send({
      success: true,
      data: users,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

module.exports = {
  addBooking,
  getBookings,
};
