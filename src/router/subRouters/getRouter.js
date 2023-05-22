const { Router } = require("express");
const { getProducts, getDetails } = require("../../handlers/getHandlers");

const getRouter = Router();

getRouter.get("/", getProducts);

getRouter.get("/:id", getDetails);

module.exports = getRouter;
