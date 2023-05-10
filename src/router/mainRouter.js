const { Router } = require("express");
const getRouter = require("./subRouters/getRouter");
const putRouter = require("./subRouters/putRouter");
const postRouter = require("./subRouters/postRouter");
const deleteRouter = require("./subRouters/deleteRouter");

const mainRouter = Router();

mainRouter.use("/get", getRouter);
mainRouter.use("/put", putRouter);
mainRouter.use("/post", postRouter);
mainRouter.use("/delete", deleteRouter);

module.exports = mainRouter;
