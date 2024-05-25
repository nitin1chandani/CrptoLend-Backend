import express from "express";
import { createUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post('/signup', createUser);

export default userRouter;
