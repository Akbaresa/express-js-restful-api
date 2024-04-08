import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);
userRouter.get("/api/user/current" , userController.get);
userRouter.patch("/api/user/current" , userController.update);

export {
    userRouter
}