const { usersCollection } = require("../database/databaseConnection");

//get all buyers
async function getBuyers(req, res, next) {
  try {
    const query = {
      userRole: "buyer",
    };
    const allBuyers = await usersCollection.find(query).toArray();
    res.send({
      success: true,
      data: allBuyers,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

module.exports = {
  getBuyers,
};
