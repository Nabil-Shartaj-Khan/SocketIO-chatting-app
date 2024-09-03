const User = require("../models/User");

const register = (req, res) => {
  const { name, email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    User.create(name, email, password, (err, result) => {
      if (err) throw err;
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

module.exports = {
  register,
};
