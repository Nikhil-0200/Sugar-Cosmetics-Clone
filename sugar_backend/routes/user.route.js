import express from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const jwt = jsonwebtoken;

const userRouter = express.Router();

//Register Endpoint
userRouter.post("/register", async (req, res) => {
  const { userName, email, password, fullName, role } = req.body;
  try {
    const checkUser = await userModel.findOne({ email, userName });

    if (checkUser) {
      return res.status(500).json({ msg: `User already registered` });
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const registerUser = new userModel({
      userName,
      email,
      password: hashPassword,
      fullName,
      role,
    });

    await registerUser.save();
    return res.status(200).json({ msg: `User registered successfully` });
  } catch (error) {
    res
      .status(200)
      .json({ msg: `Error occured while registering  user ${error}` });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(500).json({ msg: `Please register first` });
    }

    const isCheck = await bcrypt.compare(password, user.password);

    if (!isCheck) {
      return res.status(500).json({ msg: `Invalid login or password` });
    }

    if (isCheck) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      res.status(200).json({ msg: `User login successfully`, token });
    }
  } catch (error) {
    res.status(200).json({ msg: `Invalid login or password ${error}` });
  }
});

export default userRouter;
