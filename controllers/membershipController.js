import * as db from "../db/queries.js";

const password = "lala"

export function getMembershipForm(req, res) {
    return res.render("membershipForm");
}

export async function activateMembership(req, res, next) {
    const currentUser = req.user;
    if (req.body.password === password) {
        await db.activateMembership(currentUser.id);
        return next();
    }
    res.send("Password do not match");
}