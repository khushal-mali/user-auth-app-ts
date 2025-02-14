import express from "express";
import { searchUser } from "../controllers/userController";
import { authenticate } from "../middleware/authMiddleware";
const router = express.Router();

router.get("/search/:query", authenticate, searchUser);

export default router;
