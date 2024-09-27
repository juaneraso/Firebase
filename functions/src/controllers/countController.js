const { Count } = require("../db");

const createCount = async () => {
  const value = 0;
  const newCount = await Count.create({ value: value });
  return newCount;
};

const increaseCount = async () => {
  const newCount = await Count.increment(
    { value: 1 },
    { where: { id: "c8c3add7-19a5-495b-9b98-573a023e46e8" } }
  );
  return newCount;
};

// resetear contador
const updateCount = async () => {
  const value = 0;
  const newCount = await Count.update(
    { value: value },
    { where: { id: "c8c3add7-19a5-495b-9b98-573a023e46e8" } }
  );
  return newCount;
};

const getCount = async () => {
  const count = await Count.findAll();

  return count;
};

module.exports = { createCount, increaseCount, updateCount, getCount };
