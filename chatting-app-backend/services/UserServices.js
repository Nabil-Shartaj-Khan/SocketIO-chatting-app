const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Import the User model
const jwt = require("jsonwebtoken");

const UserService = {
  //for registering a user
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

  //finding by email
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

  //user login
  loginUser: async (email, password) => {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      //jwt token generation
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return { token };
    } catch (error) {
      throw new Error(`Error logging in: ${error.message}`);
    }
  },
};

module.exports = UserService;
