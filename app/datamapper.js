const client = require('./client');


const dataMapper = {

    // --------------------------------------
    //méthode permettant de récupérer 3 produits aléatoirement A REVOIR
    // --------------------------------------
    getNews: async () => {
        const sql = "SELECT * FROM ocoffee ORDER BY RANDOM () LIMIT 3";
        const result = await client.query(sql);
        return result.rows;

    },



    // --------------------------------------
    //méthode permettant de récupérer tous les produits
    // --------------------------------------
    getAllProduct: async () => {
        const sql = "SELECT * FROM ocoffee";
        const result = await client.query(sql);
        return result.rows;
    },


    // --------------------------------------
    //méthode permettant de récupérer un seul produit avec paramètre
    // --------------------------------------
    getOneproduct: async (productId) => {
        const sql = "SELECT * FROM ocoffee WHERE id = $1";
        const result = await client.query(sql, [productId]);
        return result.rows[0]; // Retourne la première ligne
    
    },


    // --------------------------------------
    // Méthode pour récupérer les produits par catégorie
    // --------------------------------------
    getProductByCategory: async (category) => {
        const sql = "SELECT * FROM ocoffee WHERE category = $1";
        const { rows } = await client.query(sql, [category]);
        return rows;
    },


      // --------------------------------------
      // Méthode pour récupérer toutes les catégories 
      // --------------------------------------

      getAllCategories: async () => {
        //chaque valeur de la colonne category apparaîtra une seule fois
        // même si elle apparaît plusieurs fois dans la table.
        const sql = "SELECT DISTINCT category FROM ocoffee";
        const result = await client.query(sql);
        // Crée un tableau contenant uniquement les valeurs de la colonne 'category'
        return result.rows.map(row => row.category);
    }
};



module.exports = dataMapper;