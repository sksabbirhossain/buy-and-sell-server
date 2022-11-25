const { usersCollection } = require("../database/databaseConnection");

//create user
async function addUser(req, res, next) {
  try {
    const data = req.body;
    const users = await usersCollection.insertOne(data);
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

module.exports = {
  addUser,
};
