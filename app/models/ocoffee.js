// app/models/ocoffee.js

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class OCoffee extends Model {}

OCoffee.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    origine: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

  },
  {
    sequelize,
    tableName: "ocoffee", // Correspondance avec le nom de la table dans la base de données
    timestamps: true, // Assure que createdAt et updatedAt sont gérés automatiquement
  }
);

module.exports = OCoffee;
