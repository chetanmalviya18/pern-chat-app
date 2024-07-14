import { Router } from "express";
import { getMe, login, logout, signup } from "../controllers/authController.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = Router();

router.get("/me", protectRoute, getMe);
router.post("/login", login);
router.get("/logout", logout);
router.post("/signup", signup);

export default router;
