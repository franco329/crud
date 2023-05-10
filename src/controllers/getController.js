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
  const cleanedProducts = infoCleaner(products);
};
module.exports = {
  getAllProducts,
};
