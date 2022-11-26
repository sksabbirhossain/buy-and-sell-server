const { ObjectId } = require("mongodb");
const { productCollection } = require("../database/databaseConnection");

//get products by categoryid
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

//get product for user by useremail
async function getMyProduct(req, res, next) {
  const email = req.query.email;
  try {
    const query = {
      userEmail: email,
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

//delete product
async function deleteProduct(req, res, next) {
  try {
    const id = req.params.id;
    console.log(id)
    const query = {
      _id: ObjectId(id),
    };
    const product = await productCollection.deleteOne(query);
    res.send({
      success: true,
      message: "Product Delete successfull",
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
  getMyProduct,
  deleteProduct
};
