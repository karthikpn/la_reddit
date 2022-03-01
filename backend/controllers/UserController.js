import mongoose from "mongoose";
import { comparePassword, generateToken, hashPassword } from "../utils/auth.js";
import User from "../models/UserModel.js";
import expressAsyncHandler from "express-async-handler";

export const registerUser = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User could not be created");
    }
  } catch (error) {
    res.status(400);
    throw new Error("User could not be created");
  }
});

export const loginUser = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const checkPass = await comparePassword(password, user.password);
      const token = generateToken(user._id);
      res.cookie("token", token, {
        httpOnly: true,
      });
      if (checkPass) {
        return res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token,
        });
      } else {
        res.status(400);
        throw new Error("Wrong Password!");
      }
    } else {
      res.status(400);
      throw new Error("User does not exist");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
