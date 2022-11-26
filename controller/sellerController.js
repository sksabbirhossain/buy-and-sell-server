const { usersCollection } = require("../database/databaseConnection");

//get all buyers
async function getsellers(req, res, next) {
  try {
    const query = {
      userRole: "seller",
    };
    const allsellers = await usersCollection.find(query).toArray();
    res.send({
      success: true,
      data: allsellers,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

module.exports = {
  getsellers,
};
