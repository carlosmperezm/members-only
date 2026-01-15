import pool from "./pool.js";

export async function getUserById(id) {
    const result = await pool.query("SELECT * FROM users WHERE id= $1", [id]);
    return result.rows[0];
}
export async function getUserByUsername(username) {
    const result = await pool.query(
        "SELECT * FROM users WHERE username=$1", [username]
    );
    return result.rows[0];
}
export async function createUser(user) {
    return await pool.query(`
       INSERT INTO users(first_name, last_name,username, password, is_member, is_admin)
            VALUES($1,$2,$3,$4,$5,$6) 
       `,
        [user.firstName, user.lastName, user.username, user.password, user.isMember, user.isAdmin]
    );
}
