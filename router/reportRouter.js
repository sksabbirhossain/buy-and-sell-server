const express = require("express");
const { addReportProduct, getReportProduct } = require("../controller/reportController");

const router = express.Router();

router.get("/get-report-to-admin", getReportProduct);
router.post("/report-to-admin", addReportProduct);

module.exports = router;
