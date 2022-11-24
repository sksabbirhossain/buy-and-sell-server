const { categoryCollection } = require("../database/databaseConnection");

//get all categories function
async function getCategory(req, res, next) {
  try {
    const query = {};
    // const appointmentOption = await appointmentOptions.find(query).toArray();
    res.send({
      success: true,
      //   data: appointmentOption,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

//add category function
async function addCategory(req, res, next) {
  try {
    const data = req.body;
    const categories = await categoryCollection.insertOne(data);
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
  getCategory,
  addCategory,
};
