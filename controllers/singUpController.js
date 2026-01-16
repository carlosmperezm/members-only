import bcrypt from "bcryptjs";
import * as db from "../db/queries.js";

export async function createUser(req, res, next) {
    // TODO: don't forget to sanitize data first
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const passwordMatch = await bcrypt
        .compare(req.body.confirmPassword, hashedPassword);

    if (!passwordMatch) {
        return res.send("Password do not match");
    }

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: hashedPassword,
        isMember: false,
        isAdmin: false,
    }
    await db.createUser(user);
    return next();
}

export function getSignUpForm(req, res) {
    res.render("sing-up");
}