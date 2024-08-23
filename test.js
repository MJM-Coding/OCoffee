const sequelize = require("./app/database"); // Assurez-vous que le chemin est correct
const OCoffee = require("./app/models/ocoffee");

async function main() {


  try {
    // Authentifier la connexion
    await sequelize.authenticate();
    console.log("Connexion établie avec succès.");

    // Synchroniser les modèles avec la base de données
    await sequelize.sync({ alter: true }); // Utilisez { force: true } pour supprimer et recréer les tables (attention: cela supprime les données existantes)
    console.log("Base de données synchronisée.");



    // Trouver tous les enregistrements dans la table ocoffee
    const coffees = await OCoffee.findAll();
    console.log(coffees);







    
    
  } catch (error) {
    console.error("Impossible d'authentifier la connexion", error);
  }
}

main();
