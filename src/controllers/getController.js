const products = require("../utils/data.json");

const infoCleaner = (array) => {
  return array.map((element) => {
    return {
      name: element.name,
      description: element.description,
      price: element.price,
      image: element.image,
    };
  });
};

const getAllProducts = async () => {
  return products;
};
const getProductByName = async (name) => {
  const infoApi = products;
  const cleanedProducts = infoCleaner(infoApi);
  const filteredProducts = cleanedProducts.filter(
    (product) => product.name.toLowerCase() === name.toLowerCase()
  );
  return filteredProducts;
};

const getById = async (id) => {
  return products.filter((product) => product.id === Number(id));
};

module.exports = {
  getAllProducts,
  getProductByName,
  getById,
};
