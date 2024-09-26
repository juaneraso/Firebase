const {
  createCount,
  increaseCount,
  updateCount,
  getCount,
} = require("../controllers/countController");

const createCountHandler = async (req, res) => {
  try {
    const newCount = await createCount();
    res.status(201).json(newCount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const increaseCountHandler = async (req, res) => {
  try {
    const newCount = await increaseCount();
    res.status(201).json(newCount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCountHandler = async (req, res) => {
  try {
    const newCount = await updateCount();
    res.status(201).json(newCount);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountHandler = async (req, res) => {
  try {
    const count = await getCount();
    res.status(201).json(count);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCountHandler,
  increaseCountHandler,
  updateCountHandler,
  getCountHandler,
};
