import { Router } from "express";
import { getLoginForm, login } from "../controllers/loginController.js";
import passport from "passport";

const loginRouter = Router();

loginRouter.get("/", getLoginForm);
loginRouter.post("/", passport.authenticate("local"), login);

export default loginRouter;