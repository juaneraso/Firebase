const { Router } = require("express");

const {
  createCountHandler,
  increaseCountHandler,
  updateCountHandler,
  getCountHandler,
} = require("../handlers/countHandler");

const countRouter = Router();

countRouter.post("/", createCountHandler);

countRouter.put("/increase", increaseCountHandler);
countRouter.put("/reset", updateCountHandler);
countRouter.get("/get", getCountHandler);

module.exports = countRouter;
