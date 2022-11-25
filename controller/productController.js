const { productCollection } = require("../database/databaseConnection");

//add product
async function addProduct(req, res, next) {
  try {
    const data = req.body;
    const categories = await productCollection.insertOne(data);
    res.send({
      success: true,
      data: categories,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

module.exports = {
    addProduct,
}