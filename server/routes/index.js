import { Router } from "express";
import authRoutes from "./authRoutes.js";
import messageRoutes from "./messageRoutes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/message", messageRoutes);

export default router;
