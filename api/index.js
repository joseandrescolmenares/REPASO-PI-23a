const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.

// force: true /false - FORZAR EL REINICIO DE LA BASE DE DATOS
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("Running at PORT:3001"); // eslint-disable-line no-console
  });
});
