// importa algo qui
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("character", {
    // UUID - "5sx5-asd5-q89e-asd5"
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
    },
    origen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    create: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    friends: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
  });
};
