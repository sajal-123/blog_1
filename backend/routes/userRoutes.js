import express from "express";
import { SignUp, Login, userProfile, updateProfile, updatePictureProfile, ForgetPassword, ResetPassword } from "../controller/User.controller.js";
import { AuthGuard, ResetPass } from "../middleware/Auth.middleware.js";
const router = express.Router();

// Register a new user
router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/profile", AuthGuard, userProfile);
router.post("/updateProfile", AuthGuard, updateProfile);
router.post("/update-picture-Profile", AuthGuard, updatePictureProfile);
router.post("/forgetPassword", ForgetPassword);
router.post("/resetPassword",ResetPass, ResetPassword);

// Additional user routes can be added here

export default router;
