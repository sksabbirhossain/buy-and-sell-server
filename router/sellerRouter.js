const express = require("express");
const {
  getsellers,
  updateVerifySeller,
} = require("../controller/sellerController");

const router = express.Router();

router.get("/get-allsellers", getsellers);
router.put("/verify-seller/:id", updateVerifySeller);

module.exports = router;
