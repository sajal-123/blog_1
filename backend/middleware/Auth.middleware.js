import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const AuthGuard = async (req, res, next) => {
  // Check if the authorization header is present and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract the token from the authorization header
      const token = req.headers.authorization.split(" ")[1];
      // Verify the token and extract the user ID
      const { _id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      // Fetch the user from the database, excluding the password field
      req.user = await User.findById(_id).select("-password");
      // Proceed to the next middleware
      next();
    } catch (error) {
      // Token verification failed
      const err = new Error("Not Authorized: Token verification failed");
      err.statusCode = 401;
      next(err);
    }
  } else {
    // Authorization header is missing or does not start with "Bearer"
    const err = new Error("Not Authorized: No token provided");
    err.statusCode = 401;
    next(err);
  }
};

export const ResetPass = async (req, res, next) => {
  // Check if the token is present in the query parameters
  try {
    // Extract the token from the query parameters
    const token = req.body.token;
    if (!token) {
      const err = new Error("Not Authorized: No token provided");
      err.statusCode = 401;
      next(err);
    }
    // Verify the token and extract the user ID
    const { _id } = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

    // Fetch the user from the database, excluding the password field
    req.user = await User.findById(_id);
    // Proceed to the next middleware
    next();
  } catch (error) {
    // Token verification failed
    const err = new Error("Not Authorized: Token verification failed");
    err.statusCode = 401;
    next(err);
  }
};
