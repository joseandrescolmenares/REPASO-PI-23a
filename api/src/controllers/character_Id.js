const { characterAll } = require("../controllers/character");
const {characters, episode } = require("../db")

const characterID = async (id) => {
  const   charactertotal = await characterAll()
  const filtercharacter = charactertotal.find((e) => e.id == id);
  console.log(filtercharacter)
  return filtercharacter
};

module.exports = {characterID}