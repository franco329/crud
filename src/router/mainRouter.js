const { Router } = require("express");
const {
  getRouter,
  putRouter,
  deleteRouter,
  postRouter,
} = require("./subRouters");

const mainRouter = Router();

mainRouter.use("/get", getRouter);
mainRouter.use("/put", putRouter);
mainRouter.use("/post", postRouter);
mainRouter.use("/delete", deleteRouter);

module.exports = mainRouter;
