const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const { dbConnect } = require("./database/databaseConnection");
const categoryRouter = require("./router/categoryRouter");
const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");
const bookingsRouter = require("./router/bookingsRouter");
const buyerRouter = require("./router/buyerRouter");
const sellerRouter = require("./router/sellerRouter");
const adRouter = require("./router/adRouter");
const reportRouter = require("./router/reportRouter");
const paymentRouter = require("./router/paymentRouter")

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
app.use("/api", sellerRouter);
app.use("/api", adRouter);
app.use("/api", reportRouter);
app.use("/api", paymentRouter);

//listen server
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
