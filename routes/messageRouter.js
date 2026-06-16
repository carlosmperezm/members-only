import { Router } from "express";
import { checkIfUserIsAuthenticated } from "../controllers/auth.js";
import { getNewMessageForm, createMessage, getAllMessages, deleteMessage }
    from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.get("/", checkIfUserIsAuthenticated, getAllMessages);
messageRouter.get("/new", checkIfUserIsAuthenticated, getNewMessageForm);
messageRouter.post("/new", createMessage);
messageRouter.get("/delete/:messageId", deleteMessage);

export default messageRouter;
