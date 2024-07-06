import express from "express";
import { Login, SignUp, userProfile,UpdateUser } from "../controller/User.controller.js";
import { AuthGraud } from "../middleware/Auth.middleware.js";
const router = express.Router();

// Register a new user
router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/profile", AuthGraud, userProfile);
router.post("/updateProfile", AuthGraud, UpdateUser);

// Additional user routes can be added here

export default router;
