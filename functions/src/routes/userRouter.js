const { Router } = require("express");
const {
  getUsersHandler,
  getUserHandlerById,
  createUserHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

const validate = (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Missing name" });
  }
  if (!email) {
    return res.status(400).json({ error: "Missing email" });
  }
  if (!phone) {
    return res.status(400).json({ error: "Missing phone" });
  }
  next();
};

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserHandlerById);

usersRouter.post("/", validate, createUserHandler);

module.exports = usersRouter;
