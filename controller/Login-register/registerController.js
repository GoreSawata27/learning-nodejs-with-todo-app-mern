import bcrypt from "bcrypt";
import register from "../../model/Login-register/registerModel.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await register.find({ email });

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email  already exists" });
    }

    const hashedpass = await bcrypt.hash(password, 10);

    const newUser = new register({
      username,
      email,
      password: hashedpass,
    });

    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { registerUser };
