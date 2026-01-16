import "dotenv/config";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import pool from "../db/pool.js";

const PGStore = connectPgSimple(session);
const COOKIE_EXP_TIME = 60 * 60 * 1000; // 1 hour

const sessionStore = session({
    store: new PGStore({ pool, createTableIfMissing: true }),
    secret: process.env.SESSION_SIGN,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: COOKIE_EXP_TIME }
});

export default sessionStore;