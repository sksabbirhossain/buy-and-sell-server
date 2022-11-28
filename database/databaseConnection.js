const { MongoClient } = require("mongodb");

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3h0yhfl.mongodb.net/?retryWrites=true&w=majority`;
const clint = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
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
const paymentCollection = clint.db("buyandsell").collection("payments");

module.exports = {
  dbConnect,
  categoryCollection,
  productCollection,
  usersCollection,
  bookingsCollection,
  advertiseCollection,
  reportCollection,
  paymentCollection,
};
