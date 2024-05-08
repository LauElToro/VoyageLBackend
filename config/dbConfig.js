const mysql = require('mysql2/promise');

// Configura la conexión a la base de datos MySQL
const db = mysql.createPool({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11704922',
  password: 'USY5uQcRBr',
  database: 'sql11704922'
});

module.exports = db;
