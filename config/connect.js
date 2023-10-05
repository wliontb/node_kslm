// /config/connect.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'baxuwpta_kslm',
  password: process.env.DB_PASSWORD || 'heheboi12345',
  database: process.env.DB_NAME || 'baxuwpta_kslm',
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = db;