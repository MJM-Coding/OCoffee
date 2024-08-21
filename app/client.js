// 1. require le module pg
const pg = require('pg');

// 2. Crée un client --> PG_URL est dans le .env
const client = new pg.Client(process.env.PG_URL);

// 3. Connecte le client
client.connect();

// 4. Exporte le client connecté
module.exports = client;