import register from "../../model/Login-register/registerModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await register.findOne({ username });

    if (!user) {
      return res.status(200).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(404).json({ message: "Password is incorrect" });
    }

    const skey = "test";

    const accessToken = jwt.sign({ username: user.username }, skey, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ username: user.username }, skey, {
      expiresIn: "7d",
    });

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { login };
