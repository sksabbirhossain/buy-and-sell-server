const { bookingsCollection } = require("../database/databaseConnection");

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
};
