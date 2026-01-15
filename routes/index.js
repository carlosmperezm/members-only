import { Router } from "express";
import singUpRouter from "./singUp.js";

const appRouter = Router();

appRouter.use("/sign-up", singUpRouter);

appRouter.get("/", (req, res) => res.send("working from routes"));

export default appRouter;