const express = require("express");
const { addUser, getUsers } = require("../controller/userController");

const router = express.Router();

router.post("/get-user", getUsers);
router.post("/add-user", addUser);

module.exports = router;
