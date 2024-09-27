const { Router } = require("express");
const usersRouter = require("./userRouter");
const postsRouter = require("./postsRouter");
const countRouter = require("./countRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postsRouter);
mainRouter.use("/count", countRouter);

module.exports = mainRouter;
