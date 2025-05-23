import express from "express";
import { regiter } from "../control/userController.js";
import { sendMail } from "../control/sendMail.js";
// import { regiter } from "../controler/userConmtroller.js";

const userRoute = express.Router();

// GET


// POST

userRoute.post("/register",regiter)

userRoute.post("/send-email",sendMail)


// PUT


// DELETE
export default userRoute