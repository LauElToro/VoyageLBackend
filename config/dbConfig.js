const mysql = require('mysql2/promise');

// Configura la conexión a la base de datos MySQL
const db = mysql.createPool({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11703862',
  password: 'Bf91liueDk',
  database: 'sql11703862'
});

module.exports = db;
