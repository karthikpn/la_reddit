import express from "express";
import { registerUser, loginUser } from "../controllers/UserController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/new").post(registerUser);
router.post("/", loginUser);

export default router;
