import { Router } from "express";
import singUpRouter from "./singUp.js";
import loginRouter from "./login.js";

const appRouter = Router();

appRouter.use("/sign-up", singUpRouter);
appRouter.use("/login", loginRouter);

appRouter.get("/", (req, res) => res.send("working from routes"));

export default appRouter;