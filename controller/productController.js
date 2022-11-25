const { productCollection } = require("../database/databaseConnection");

//get products
async function getProduct(req, res, next) {
  const id = req.params.id;
  try {
    const query = {
      categoryId: id,
    };
    const products = await productCollection.find(query).toArray();
    res.send({
      success: true,
      data: products,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

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
  getProduct,
};
