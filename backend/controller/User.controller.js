import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import validator from "validator";
import { uploadPicture } from "../middleware/UploadPictureMiddleware.js";
import { fileRemover } from "../utils/fileRemover.js";
import nodemailer from "nodemailer";
import sendGridTransport from "nodemailer-sendgrid-transport";

function validateEmail(email) {
  return validator.isEmail(email);
}

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    // Disable validation before saving to avoid password validation errors
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(
      "Something went wrong while generating refresh and access tokens"
    );
  }
};

const SignUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate email format
    if (!validateEmail(email)) {
      throw new Error("Invalid Email Address");
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password,
    });

    // Fetch user details without sensitive information
    const createdUser = await User.findById(newUser._id);

    if (!createdUser) {
      return res.status(500).json({ message: "Failed to register user" });
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      createdUser._id
    );
    const loggedInUser = await User.findById(createdUser._id).select(
      "-password -refreshToken"
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true, // The cookie only accessible by the web server
      maxAge: 3600000, // 1 day
    });
    // Respond with success message and user details
    res.status(200).json({
      user: loggedInUser,
      accessToken,
      message: "User Register SuccessFully",
    });
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all details" });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Verify the password
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    // Respond with the user object excluding sensitive fields
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true, // The cookie only accessible by the web server
      maxAge: 3600000, // 1 day
    });
    res.status(200).json({
      user: loggedInUser,
      accessToken,
      message: "User LoggedIn SuccessFully",
    });
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
};

const userProfile = async (req, res, next) => {
  try {
    const user = req.user;
    if (user) {
      return res.status(201).json(user);
    }
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    // Fetch the user by ID from the request object
    let user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );

    // If user not found, throw an error
    if (!user) {
      const err = new Error("User Not Found");
      err.statusCode = 404;
      throw err;
    }

    // Update user name and email if provided in the request body
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    // Update password if provided and meets the length requirement
    if (req.body.password) {
      if (req.body.password.length < 6) {
        const err = new Error("Password length must be at least 6 characters");
        err.statusCode = 400;
        throw err;
      } else {
        user.password = req.body.password;
      }
    }

    // Save the updated user document
    const updatedUserProfile = await user.save();

    // Respond with the updated user profile
    res.status(200).json(updatedUserProfile);
  } catch (error) {
    next(error); // Pass errors to the error-handling middleware
  }
};

const updatePictureProfile = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("ProfilePicture");
    upload(req, res, async function (err) {
      if (err) {
        const error = new Error("An unKnown Error Occured ->", err);
        next(error);
      } else {
        if (req.file) {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          console.log(req.file.filename);
          if (filename) {
            fileRemover(filename);
          }
          updatedUser.avatar = req.file.filename;
          await updatedUser.save();
          return res.status(200).json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            accessToken: updatedUser.accessToken,
          });
        } else {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          console.log(updatedUser);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);
          res.status(200).json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            accessToken: updatedUser.accessToken,
          });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

const ForgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const { refreshToken } = await generateAccessAndRefreshTokens(user._id);
    console.log(process.env.SERVICEEMAIL);
    console.log(process.env.SERVICEMAILPASSWORD);

    const transporter = nodemailer.createTransport(
      sendGridTransport({
        auth: {
          api_key: process.env.twelinAPI_KEY,
        },
      })
    );

    const info = await transporter.sendMail({
      from: 'sajalytr@gmail.com',
      to: email,
      subject: "Sending Reset Email Code",
      text: `Click the following link to reset your password: http://localhost:5173/reset_password/${refreshToken}`,
    });
    console.log("Message sent: %s", info.messageId);

    res.json({
      status: true,
      message: "Email sent! Check your inbox for the reset link.",
    });
  } catch (error) {
    console.error("ForgetPassword error:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
};

export {
  SignUp,
  Login,
  userProfile,
  updateProfile,
  updatePictureProfile,
  ForgetPassword,
};
