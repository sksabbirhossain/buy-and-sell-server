const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const clint = new MongoClient(url);
async function dbConnect() {
  try {
    await clint.connect();
    console.log("Database connection successfull");
  } catch (error) {
    console.log("something worng!!!");
  }
}
// dbConnect().catch((err) => console.log(err));

// create collections
const categoryCollection = clint.db("buyandsell").collection("categories");
const productCollection = clint.db("buyandsell").collection("products");
const usersCollection = clint.db("buyandsell").collection("users");
const bookingsCollection = clint.db("buyandsell").collection("bookings");
const advertiseCollection = clint.db("buyandsell").collection("advertises");
const reportCollection = clint.db("buyandsell").collection("reportProducts");

module.exports = {
  dbConnect,
  categoryCollection,
  productCollection,
  usersCollection,
  bookingsCollection,
  advertiseCollection,
  reportCollection,
};
