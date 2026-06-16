import bcrypt from "bcryptjs";
import * as db from "../db/queries.js";
import {
    validateFirstName,
    validateLastName,
    validateUsername,
    validatePassword,
    validateConfirmPassword
} from "../utils/sanitization.js";
import { validationResult, matchedData } from "express-validator";

const validateUser = [
    validateFirstName,
    validateLastName,
    validateUsername,
    validatePassword,
    validateConfirmPassword
];

export const createUser = [
    validateUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .render("sing-up", { errors: errors.array() });
        }
        const {
            firstName,
            lastName,
            username,
            password,
            confirmPassword
        } = matchedData(req);
        const isAdmin = req.body.is_admin === "on" ? true : false;

        const hashedPassword = await bcrypt.hash(password, 10);
        const passwordMatch = await bcrypt
            .compare(confirmPassword, hashedPassword);

        if (!passwordMatch) {
            return res.send("Password do not match");
        }

        const user = {
            firstName,
            lastName,
            username,
            password: hashedPassword,
            isMember: isAdmin,
            isAdmin,
        }
        await db.createUser(user);
        return res.send("Successfully signed up");
    }

];

export function getSignUpForm(req, res) {
    res.render("sing-up");
}
