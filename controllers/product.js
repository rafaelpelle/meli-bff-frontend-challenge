const axios = require("axios");
const { errorResponse } = require("../helpers/apiResponse");
const { parseProductsList } = require("../helpers/parser");

async function getProductsList(req, res) {
  try {
    const { q } = req.query;
    const { data } = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}`,
    );
    res.send(parseProductsList(data));
  } catch (error) {
    console.log(error.msg);
    return errorResponse(res, error);
  }
}

function getProductDetails(req, res) {
  const productId = req.params.id;
  res.send("GET product details" + productId);
}

module.exports = {
  getProductsList,
  getProductDetails,
};
