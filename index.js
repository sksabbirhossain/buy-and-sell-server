const express = require("express");
const cors = require("cors");

const { dbConnect } = require("./database/databaseConnection");
const categoryRouter = require("./router/categoryRouter");
const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");
const bookingsRouter = require("./router/bookingsRouter");
const buyerRouter = require("./router/buyerRouter");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// database connection
dbConnect();

//route setup
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", bookingsRouter);
app.use("/api", buyerRouter);

//listen server
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
