const dataMapper = require("../datamapper");


const catalogueController = {


 // --------------------------------------
 // Méthode pour afficher la page catalogue avec méthode de filtrage sur input
 // --------------------------------------
  cataloguePage: async (req, res) => {
    const category = req.query.category || '';
    try {
      let products;

      if (category && category !== 'Tout') {
        products = await dataMapper.getProductByCategory(category);
      } else {
        products = await dataMapper.getAllProduct();
      }

      const categories = await dataMapper.getAllCategories();
      categories.unshift('Tout');

      res.status(200).render('catalogue', { products, categories, selectedCategory: category });
    } catch (error) {
      res.status(500).send(`Erreur côté serveur: ${error}`);
    }
  },
};

module.exports = catalogueController;