import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const protect = expressAsyncHandler(async (req, res) => {
  const token = req.authorization.user;
  if (token) {
    try {
      const _id = jwt.verify(token, process.env.SECRET);
      const user = await User.findById(_id);
      req.user = user;
    } catch (error) {
      res.status(400);
      throw new Error("Not Authorized!");
    }
  } else {
    res.status(400);
    throw new Error("Not Authorized!");
  }
});
