const { advertiseCollection } = require("../database/databaseConnection");

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
};
