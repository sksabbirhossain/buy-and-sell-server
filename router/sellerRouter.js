const express = require("express");
const { getsellers } = require("../controller/sellerController");

const router = express.Router();

router.get("/get-allsellers", getsellers);

module.exports = router;
