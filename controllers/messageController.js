import { matchedData, validationResult } from "express-validator";
import * as db from "../db/queries.js";
import { validateDescription, validateMessageTitle }
    from "../utils/sanitization.js";

const validateMessage = [
    validateMessageTitle,
    validateDescription
]

export const createMessage = [
    validateMessage,
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res
                .status(400)
                .render("message-form", { errors: result.array() })
        }
        const { title, description } = matchedData(req);
        const newMessage = {
            title,
            description,
            author: req.user
        }
        await db.createMessage(newMessage);
        res.send("Message was created");
    },
];

export async function getNewMessageForm(req, res) {
    res.render("message-form");
}

export async function getAllMessages(req, res) {
    const messagesData = await db.getAllMessages();
    const messages = [];

    if (req.user["is_member"]) {
        for (const msg of messagesData) {
            const user = await db.getUserById(msg.author)
            const newMessage = {
                id: msg.id,
                title: msg.title,
                description: msg.description,
                date: msg.date,
                author: user["first_name"]
            };
            messages.push(newMessage);
        }
    } else {
        for (const msg of messagesData) {
            const newMessage = {
                title: msg.title,
                description: msg.description,
            };
            messages.push(newMessage);
        }
    }

    res.render("messages", { user: req.user, messages })
}
