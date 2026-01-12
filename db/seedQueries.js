
export const CREATE_USERS_TABLE = `
    CREATE TABLE IF NOT EXITS users(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        username VARCHAR(100),
        password VARCHAR(255),
        is_member BOOLEAN,
        is_admin BOOLEAN
    );
`;

export const CREATE_MESSAGES_TABLE = `
    CREATE TABLE IF NOT EXITS messages(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(255) NOT NULL,
        date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        description TEXT,
        author INT REFERENCES users(id) ON DELETE SET NULL
    );
`;

export const CREATE_USERS = `
    INSERT INTO users(first_name, last_name, username, password, is_member, is_admin)
        VALUES('John', 'Doe', 'johnD', 'mySuperSecretPassword', TRUE, FALSE),
        VALUES('Rick', 'Dominic', 'rickdom' ,'rickPassword', TRUE, TRUE),
        VALUES('Laura', 'Hernandez', 'lahernandez', 'lauraPass', FALSE, FALSE)
        ;
`;

export const CREATE_MESSAGES = `
    INSERT INTO messages(title, description, author)
        VALUES('My super message', 'Some random description', 1 ),
        VALUES('My title', 'Some random description', 2 ),
        VALUES('My local title', 'Some random description', 1 )
        ;
`;