import { Router } from "express";
import { getSignUpForm, createUser } from "../controllers/singUpController.js";

const signUpRouter = Router();

signUpRouter.get("/", getSignUpForm);
signUpRouter.post("/", createUser);

function redirectToHome(req, res) {
    return res.redirect("/");
}

export default signUpRouter;