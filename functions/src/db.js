const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const PostModel = require("./models/Post");
const CountModel = require("./models/Count");

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BDD, DATABASE_URL } =
  process.env;

const database = new Sequelize(
  `${DATABASE_URL}`,

  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_BDD}`,
  {
    logging: false,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false, // Deshabilitar la verificación del certificado (puede ser necesario en ciertos entornos)
    //   },
    // },
  }
);

UserModel(database);
PostModel(database);
CountModel(database);

const { User, Post } = database.models;

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  database,
  ...database.models,
};
