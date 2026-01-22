import { Router } from "express";
import { getLoginForm, getSuccessLoginPage } from "../controllers/loginController.js";
import passport from "passport";

const loginRouter = Router();

loginRouter.get("/", getLoginForm);
loginRouter.post("/", passport.authenticate("local", { failureRedirect: '/login', failureMessage: true }), getSuccessLoginPage);


export default loginRouter;