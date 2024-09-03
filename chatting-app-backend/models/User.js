const db = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
  createUser: (name, email, password, callback) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.query(query, [name, email, hashedPassword], callback);
  },

  findByEmail: (email, callback) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], callback);
  },
};

module.exports = User;
