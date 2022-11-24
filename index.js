const express = require("express");
const cors = require("cors");

const {dbConnect} = require("./database/databaseConnection");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// database connection
dbConnect();

//route setup
app.use("/api", (req, res) => {
  res.send("hello api");
});

//listen server
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
