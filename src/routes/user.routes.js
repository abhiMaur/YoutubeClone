import { Router } from "express";
import { 
            loginUser, 
            logoutUser, 
            registerUser, 
            refreshAccessToken, 
            changeCurrentPassword, 
            getCurrentUser, 
            updateUserAvatar, 
            updateUserCoverImage, 
            getUserChannelProfile, 
            getWatchHistory, 
            updateAccountDetails } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)   // https://localhost:8000/api/v1/users/register

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT,  logoutUser)

export default router