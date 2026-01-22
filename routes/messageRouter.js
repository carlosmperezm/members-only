import { Router } from "express";
import { getNewMessageForm, createMessage }
    from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.get("/new", getNewMessageForm);
messageRouter.post("/new", createMessage);

export default messageRouter;