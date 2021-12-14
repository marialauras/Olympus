const { Pool } = require('pg');

const db_username = "postgres";
const db_password = "rafael12";
const host = "localhost";
const port = 5432;
const db_name = "porra";

const DATABASE_URL = `postgres://${db_username}:${db_password}@${host}:${port}/${db_name}`;

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};