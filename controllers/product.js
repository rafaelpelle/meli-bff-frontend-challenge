const axios = require("axios");
const { errorResponse } = require("../helpers/apiResponse");
const { parseProductsList, parseProductDetails } = require("../helpers/parser");

async function getProductsList(req, res) {
  try {
    const { q } = req.query;

    if (!q) {
      throw new Error("Query param 'q' is required");
    }

    const { data } = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}`,
    );
    res.send(parseProductsList(data));
  } catch (error) {
    return errorResponse(res, error);
  }
}

async function getProductDetails(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Param 'id' is required");
    }

    const [detailsRes, descriptionRes] = await Promise.all([
      axios.get(`https://api.mercadolibre.com/items/${id}`),
      axios.get(`https://api.mercadolibre.com/items/${id}/description`),
    ]);

    // Docs:
    // https://developers.mercadolivre.com.br/pt_br/categorizacao-de-produtos
    const categoriesRes = await axios.get(
      `https://api.mercadolibre.com/categories/${detailsRes.data.category_id}`,
    );

    res.send(
      parseProductDetails(
        detailsRes.data,
        descriptionRes.data,
        categoriesRes.data,
      ),
    );
  } catch (error) {
    return errorResponse(res, error);
  }
}

module.exports = {
  getProductsList,
  getProductDetails,
};
