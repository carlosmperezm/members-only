import { Router } from "express";
import signUpRouter from "./signUp.js";
import loginRouter from "./login.js";
import membershipRouter from "./membership.js";
import messageRouter from "./messageRouter.js";

const appRouter = Router();

appRouter.use("/sign-up", signUpRouter);
appRouter.use("/login", loginRouter);
appRouter.use("/membership", membershipRouter);
appRouter.use("/messages", messageRouter);

appRouter.get("/", (req, res) => res.send("working from routes"));

export default appRouter;