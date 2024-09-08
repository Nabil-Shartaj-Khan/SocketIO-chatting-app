const UserService = require("../services/UserServices");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token } = await UserService.loginUser(email, password);
    res.status(200).json({
      message: "User Successfully Logged in",
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login };
