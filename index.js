import express from "express";
import DB from "./db/db.js";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import loginRegisterRotes from "./routes/login-register-Routes.js";

dotenv.config();
const app = express();
app.use(express.json());
DB();

app.use("/api/todos", todoRoutes);
app.use("/api/", loginRegisterRotes);

app.listen(process.env.PORT, () => {
  console.log("Server is live");
});
