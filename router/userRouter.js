const express = require("express");
const { addUser } = require("../controller/userController");

const router = express.Router();

router.post("/add-user", addUser);

module.exports = router;
