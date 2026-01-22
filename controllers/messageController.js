import { matchedData, validationResult } from "express-validator";
import * as db from "../db/queries.js";
import { validateDescription, validateMessageTitle }
    from "../utils/sanitization.js";

const validateMessage = [
    validateMessageTitle,
    validateDescription
]

export async function getNewMessageForm(req, res) {
    res.render("message-form");
}

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