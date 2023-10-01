const author = {
  name: "Rafael",
  lastname: "Pelle",
};

function getCategoriesFromList(data) {
  const categories = data.filters.find(({ id }) => (id = "category"));
  return categories.values[0].path_from_root.map(({ name }) => name);
}

function parseProductListItem(product) {
  return {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: product.price,
      decimals: 0,
    },
    picture: product.thumbnail,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
  };
}

function parseProductsList(data) {
  return {
    author,
    categories: getCategoriesFromList(data),
    items: data.results.slice(0, 4).map(parseProductListItem),
  };
}

module.exports = {
  parseProductsList,
};
