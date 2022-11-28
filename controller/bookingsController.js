const { ObjectId } = require("mongodb");
const { bookingsCollection } = require("../database/databaseConnection");

//get bookings
async function getBookings(req, res, next) {
  const email = req.params.email;
  try {
    const query = {
      userEmail: email,
    };
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
//get bookings by orderID
async function getBookingByRoderId(req, res, next) {
  const id = req.params.id;
  try {
    const query = {
      _id: ObjectId(id),
    };
    const allBooking = await bookingsCollection.find(query).toArray();
    res.send({
      success: true,
      data: allBooking,
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
  getBookingByRoderId,
};
