const { ObjectId } = require("mongodb");
const {
  usersCollection,
  productCollection,
} = require("../database/databaseConnection");

//get user
async function getUsers(req, res, next) {
  try {
    const query = {};
    const users = await usersCollection.find(query).toArray();
    res.send({
      success: true,
      data: users,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

async function getVerified(req, res, next) {
  const id = req.query.id;
  try {
    const query = {
      userId: id,
    };
    const users = await usersCollection.find(query).toArray();
    res.send({
      success: true,
      data: users,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

//create user
async function addUser(req, res, next) {
  try {
    const data = req.body;
    const user = await usersCollection.insertOne(data);
    res.send({
      success: true,
      data: user,
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

//delete user
async function deleteUser(req, res, nex) {
  try {
    const id = req.params.id;
    const email = req.query.email;
    const forUser = {
      _id: ObjectId(id),
    };
    const forProduct = {
      userEmail: email,
    };
    const user = await usersCollection.deleteOne(forUser);
    const product = await productCollection.deleteOne(forProduct);
    res.send({
      success: true,
      message: "User Delete successfull",
    });
  } catch (err) {
    res.send({
      success: false,
      error: err.message,
    });
  }
}

module.exports = {
  addUser,
  getUsers,
  deleteUser,
  getVerified,
};
