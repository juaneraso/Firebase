const app = require("./src/app");
const { database } = require("./src/db");

app.listen(3001, () => {
  database.sync({ force: false });
  console.log("listening on port 3001");
});

// modulo responsable de iniciar la aplicacion
