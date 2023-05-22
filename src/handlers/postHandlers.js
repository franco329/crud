const createProductHandler = async (req, res) => {
  const { name, description, price, image } = req.body;

  try {
    const response = await createProduct(name, description, price, image);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProductHandler,
};
