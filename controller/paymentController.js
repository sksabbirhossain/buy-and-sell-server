const { ObjectId } = require("mongodb");
const {
  paymentCollection,
    productCollection,
  bookingsCollection
} = require("../database/databaseConnection");

//add payment
async function addPayment(req, res, next) {
  try {
    const data = req.body;
    const productId = data.productId;
    const orderId = data.orderId;
    console.log(data);
    const query = {
      _id: ObjectId(productId),
    };
    const orderQuery = {
      _id: ObjectId(orderId),
    };
      
    const updateInfo = {
      $set: {
        status: "sold",
      },
    };
      
    const updateOrderInfo = {
      $set: {
        status: "paid",
      },
    };
      
    const order = await paymentCollection.insertOne(data);
    const updateProduct = await productCollection.updateOne(query, updateInfo);
    const updateOrder = await bookingsCollection.updateOne(orderQuery, updateOrderInfo);
    res.send({
      success: true,
      data: order,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}
module.exports = {
  addPayment,
};
