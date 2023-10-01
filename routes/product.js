const express = require("express");
const {
  getProductsList,
  getProductDetails,
} = require("../controllers/product");

const router = express.Router();

router.get("/", getProductsList);

router.get("/:id", getProductDetails);

module.exports = router;
