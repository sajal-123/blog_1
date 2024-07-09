import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js"; // Ensure the path is correct and add the .js extension
import userRoute from "./routes/userRoutes.js";
import { errorResponseHandler, InvalidPathHandler } from "./utils/Errorhandler.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Allow only requests from this origin
  methods: 'GET,POST,PUT', 
  credentials: true,// Allow only GET and POST requests
}));

// Use user routes
app.use("/api/users", userRoute);

app.use(InvalidPathHandler)
app.use(errorResponseHandler);

// Root route
app.use("/", (req, res) => res.send("Server is running"));

// Start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log("Error found:", e);
  });
