import { Router } from "express";
import { controller } from "../controllers/index.js";

export const userRouter=Router();

userRouter.post("/signup",controller.createUser);
userRouter.post("/sigin",controller.signinUser);

