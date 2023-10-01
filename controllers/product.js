function getProductsList(req, res) {
  const searchTerm = req.query.q;
  res.send("GET products list" + searchTerm);
}

function getProductDetails(req, res) {
  const productId = req.params.id;
  res.send("GET product details" + productId);
}

module.exports = {
  getProductsList,
  getProductDetails,
};
