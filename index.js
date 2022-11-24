const express = require("express");
const cors = require("cors");

const { dbConnect } = require("./database/databaseConnection");
const categoryRouter = require("./router/categoryRouter");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// database connection
dbConnect();

//route setup

app.use("/api", categoryRouter);

//listen server
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
