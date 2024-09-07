const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Import the User model

const UserService = {
  createUser: async (name, email, password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await User.create({
        name,
        email,
        password: hashedPassword,
      });
      return { success: true };
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  },

  findByEmail: async (email) => {
    try {
      const user = await User.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw new Error(`Error finding user: ${error.message}`);
    }
  },
};

module.exports = UserService;
