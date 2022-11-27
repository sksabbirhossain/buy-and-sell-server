const {
  reportCollection,
  productCollection,
} = require("../database/databaseConnection");

//get report products
async function getReportProduct(req, res, next) {
  try {
    const query = {
      status: "available",
    };
    const products = await productCollection.find(query).toArray();
    const reportProduct = await reportCollection.find({}).toArray();
    let reportedProducts = [];
    reportProduct.map((ad) => {
      const product = products.filter((product) => product._id == ad.productId);
      reportedProducts.push(...product);
    });
    res.send({
      success: true,
      data: reportedProducts,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

//add report to admin
async function addReportProduct(req, res, next) {
  try {
    const data = req.body;
    const report = await reportCollection.insertOne(data);
    res.send({
      success: true,
      data: report,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

module.exports = {
    addReportProduct,
  getReportProduct,
};
