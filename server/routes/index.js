import { Router } from "express";
import authRoutes from "./authRoutes.js";

const router = Router();

router.use("/api/auth", authRoutes);
// router.use("/api/message", messageRoutes);

export default router;
