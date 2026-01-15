import { Pool } from "pg";
import { CREATE_USERS_TABLE, CREATE_MESSAGES_TABLE, CREATE_USERS, CREATE_MESSAGES } from "./seedQueries.js";
import { argv } from "node:process";
import "dotenv/config";

const connection = argv[2] || process.env.DB_CONNECTION;
console.log(connection);

async function main() {
    const pool = new Pool({ connectionString: connection });
    try {
        console.log("Seeding...");
        await pool.connect();
        await pool.query(CREATE_USERS_TABLE);
        await pool.query(CREATE_MESSAGES_TABLE);
        await pool.query(CREATE_USERS);
        await pool.query(CREATE_MESSAGES);
        console.log("Done");
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
}

main();

