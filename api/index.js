const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {episodios} = require('../api/src/controllers/episodes')



// force: true /false - FORZAR EL REINICIO DE LA BASE DE DATOS
conn.sync({ force: true }).then(async() => {
  await episodios()
  server.listen(3001,() => {
    console.log("vamos con todo"); 
  });
});

