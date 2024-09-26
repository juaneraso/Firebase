const { Count } = require("../db");

const createCount = async () => {
  const value = 0;
  const newCount = await Count.create({ value: value });
  return newCount;
};

const increaseCount = async () => {
  const newCount = await Count.increment(
    { value: 1 },
    { where: { id: "1d067d08-b3c5-4534-abe6-ea3ef52a01d2" } }
  );
  return newCount;
};

// resetear contador
const updateCount = async () => {
  const value = 0;
  const newCount = await Count.update(
    { value: value },
    { where: { id: "1d067d08-b3c5-4534-abe6-ea3ef52a01d2" } }
  );
  return newCount;
};

const getCount = async () => {
  const count = await Count.findAll();

  return count;
};

module.exports = { createCount, increaseCount, updateCount, getCount };
