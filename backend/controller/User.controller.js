import mongoose from "mongoose";
import { User } from "../models/user.model.js";

function validateEmail(email) {
  return validator.isEmail(email);
}

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    // we are using validateBeforeSave kyki hum password (for example ) nahi bhej rahe ,taki wo validation check na kare
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const SignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ([username, email, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!validateEmail(email)) {
      return res.status(401).json({ message: "Invalid Email Address" });
    }
    const existedUser = await User.findOne({
      email,
    });
    if (existedUser) {
      // throw new ApiError(400, "user with this email already exists");
      return res
        .status(400)
        .json({ message: "User with same email already exists!" });
    }

    const user = new User.create({
      username,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      //  to escape password and refreshToken because
      "-password -refreshToken"
    );

    if (!createdUser) {
      return res
        .status(500)
        .json({ message: "Something went Wrong while registering the user" });
    }
    return res
      .status(200)
      .json({ createdUser, message: "User registered Successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went Wrong with Internal server->", error });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json("Please enter all details");
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("Invalid email or password");
    }

    // Verify the password
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid User credentials" });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    // Respond with the user object excluding sensitive fields
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    res.status(200).json(userResponse);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { SignUp, Login };
