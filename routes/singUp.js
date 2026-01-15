import { Router } from "express";
import { getSignUpForm, createUser } from "../controllers/singUpController.js";

const singUpRouter = Router();

singUpRouter.get("/", getSignUpForm);
singUpRouter.post("/", createUser, redirectToHome);

function redirectToHome(req, res) {
    return res.redirect("/");
}

export default singUpRouter;