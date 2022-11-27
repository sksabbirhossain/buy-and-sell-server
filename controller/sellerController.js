const { ObjectId } = require("mongodb");
const { usersCollection } = require("../database/databaseConnection");

//get all seller
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

//verify seller
async function updateVerifySeller(req, res, next) {
  const id = req.params.id;
  try {
    const query = {
      _id: ObjectId(id),
    };

    const updateDoc = {
      $set: {
        verified: true,
      },
    };
    const products = await usersCollection.updateOne(query, updateDoc);
    res.send({
      success: true,
      message: "seller verify successfull",
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
  updateVerifySeller,
};
