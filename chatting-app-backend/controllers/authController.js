const UserService = require("../services/UserServices");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserService.findByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    await UserService.createUser(name, email, password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error registering user: ${error.message}` });
  }
};

module.exports = {
  register,
};
