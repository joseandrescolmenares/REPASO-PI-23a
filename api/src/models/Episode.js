// importa algo qui
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("episode", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true, // NO PUEDE HABER 2 EP CON EL MISMO NOMBRE
    },
  });
};
