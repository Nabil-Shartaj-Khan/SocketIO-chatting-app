//database connection
const mysql = require("mysql");

//requires env variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  //password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database Connection Enabled");
});

module.exports = connection;
