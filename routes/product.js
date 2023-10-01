const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const searchTerm = req.query.q;
  res.send("GET products list" + searchTerm);
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.send("GET product details" + productId);
});

module.exports = router;
