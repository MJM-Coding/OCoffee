require("dotenv").config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        //indique le nom de la colonne car par defaut 'created_at' et 'updated_at' sont generés par sequelize
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
});






module.exports = sequelize;
