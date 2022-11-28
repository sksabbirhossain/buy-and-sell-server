const express = require("express");
const { addUser, getUsers, deleteUser,getVerified } = require("../controller/userController");

const router = express.Router();

router.get("/get-user", getVerified);
router.get("/get-users", getUsers);
router.post("/add-user", addUser);
router.delete("/delete-user/:id", deleteUser)

module.exports = router;
