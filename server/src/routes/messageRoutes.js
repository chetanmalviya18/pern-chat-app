import { Router } from "express";
import protectRoute from "../middlewares/protectRoutes.js";
import {
  getMessage,
  getUserForSidebar,
  sendMessage,
} from "../controllers/messageController.js";

const router = Router();

router.get("/conversations", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
