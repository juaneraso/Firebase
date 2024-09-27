const cleanArray = (apiUsers) => {
  const clean = apiUsers.map((element) => {
    return {
      id: element.id,
      name: element.name,
      email: element.email,
      phone: element.phone,
      created: false,
    };
  });
  return clean;
};

module.exports = cleanArray;
