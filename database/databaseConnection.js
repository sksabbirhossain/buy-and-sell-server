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

module.exports = {
  dbConnect,
  categoryCollection,
};
