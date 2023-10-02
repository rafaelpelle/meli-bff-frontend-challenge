const author = {
  name: "Rafael",
  lastname: "Pelle",
};

function getCategoriesFromList(data) {
  const categories = data.filters.find(({ id }) => (id = "category"));
  return categories.values[0].path_from_root.map(({ name }) => name);
}

function getCategoriesFromCategoryItem(category) {
  return category.path_from_root.map(({ name }) => name);
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
    picture: product.thumbnail.replace("http", "https"),
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

function parseProductDetails(data, description, category) {
  return {
    author,
    categories: getCategoriesFromCategoryItem(category),
    item: {
      ...parseProductListItem(data),
      picture: data.pictures[0].secure_url,
      sold_quantity: data.sold_quantity,
      description: description.plain_text,
    },
  };
}

module.exports = {
  parseProductsList,
  parseProductDetails,
};
