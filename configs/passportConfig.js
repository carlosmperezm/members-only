import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";
import * as db from "../db/queries.js";

async function verify(username, password, done) {
    try {
        const user = await db.getUserByUsername(username);
        if (!user) {
            return done(null, false, { message: "Incorrect Password" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return done(null, false, { message: "Incorrect password" })
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}

function serializeUser(user, done) {
    return done(null, user.id);
}
async function deserializeUser(id, done) {
    try {
        const user = await db.getUserById(id);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}

const strategy = new LocalStrategy(verify);
passport.use(strategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);