const {
  advertiseCollection,
  productCollection,
} = require("../database/databaseConnection");
const { addProduct } = require("./productController");

//get Advertise
async function getAdvertise(req, res, next) {
  try {
    const query = {
      status: "available",
    };
    const products = await productCollection.find(query).toArray();
    const advertises = await advertiseCollection.find({}).toArray();
    let adProducts = [];
    advertises.map((ad) => {
      const product = products.filter((product) => product._id == ad.productId);
      adProducts.push(product);
    });
    res.send({
      success: true,
      data: adProducts,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

//post a asvertise
async function addAdvertise(req, res, next) {
  try {
    const data = req.body;
    const advertise = await advertiseCollection.insertOne(data);
    res.send({
      success: true,
      data: advertise,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

module.exports = {
  addAdvertise,
  getAdvertise,
};
