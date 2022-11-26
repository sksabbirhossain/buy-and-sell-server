const { usersCollection } = require("../database/databaseConnection");

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

module.exports = {
  addUser,
  getUsers,
};