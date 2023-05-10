const { getAllProducts } = require("../controllers/getController");

const getProducts = async (req, res) => {
  const { name } = req.query;

  try {
    const response = name
      ? await getProductByName(name)
      : await getAllProducts();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDetails = (req, res) => {};

module.exports = {
  getProducts,
  getDetails,
};
