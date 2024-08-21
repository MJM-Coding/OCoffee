const dataMapper = require("../datamapper")



const mainController = {

 // --------------------------------------
 // Méthode pour afficher la page d'accueil
 // --------------------------------------
  homePage: async (req, res) => {
    try {
      const news = await dataMapper.getNews(); 
      res.status(200).render("index", { news });
    } catch (error) {
      res.status(500).send(`Erreur côté serveur: ${error}`)
    }
  },
};


  




module.exports = mainController;