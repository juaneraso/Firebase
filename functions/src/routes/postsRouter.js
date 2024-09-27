const { Router } = require("express");
const {
  postCreateHandler,
  getPostHandler,
} = require("../handlers/postsHandlers");

const postsRouter = Router();

postsRouter.get("/", getPostHandler);
postsRouter.post("/", postCreateHandler);

module.exports = postsRouter;
