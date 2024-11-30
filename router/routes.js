const express = require("express");
const router = express.Router();
const { getallproduct } = require("../controllers/controllers");
router.get("/", getallproduct);
module.exports = router;
