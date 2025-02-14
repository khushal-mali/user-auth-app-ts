import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

dotenv.config();
connectDB();

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev")); // Logs HTTP requests

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
