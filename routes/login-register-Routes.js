import express from "express";
const router = express.Router();

import { registerUser } from "../controller/Login-register/registerController.js";
import { login } from "../controller/Login-register/loginController.js";

router.post("/login", login);
router.post("/register", registerUser);

export default router;
