const cleanUser = (user) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    created: false,
  };
};

module.exports = cleanUser;
