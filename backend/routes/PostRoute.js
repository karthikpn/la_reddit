import express from "express";
import { createPost } from "../controllers/PostController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createPost);

export default router;
