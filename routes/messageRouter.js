import { Router } from "express";
import { checkIfUserIsAuthenticated } from "../controllers/auth.js";
import { getNewMessageForm, createMessage, getAllMessages }
    from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.get("/", checkIfUserIsAuthenticated, getAllMessages);
messageRouter.get("/new", checkIfUserIsAuthenticated, getNewMessageForm);
messageRouter.post("/new", createMessage);

export default messageRouter;