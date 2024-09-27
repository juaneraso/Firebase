const {
  createUser,
  getUserByid,
  getALLUsers,
  searchUserByName,
} = require("../controllers/usersController");

const getUsersHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await searchUserByName(name) : await getALLUsers();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserHandlerById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "OurBDD" : "JsonPlace";
  try {
    const user = await getUserByid(id, source);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUserHandler = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    if (!name || !email || !phone) throw Error("Missing data");
    const newUser = await createUser(name, email, phone);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  getUserHandlerById,
  createUserHandler,
};
