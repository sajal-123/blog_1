import express from 'express';
import { SignUp } from '../controller/User.controller.js';
const router = express.Router();

// Register a new user
router.post('/register', SignUp);

// Additional user routes can be added here

export default router;
