# Members Only

Project from The Odin Project's curriculum to practice authentication
and authorization.

## Install

### Fork the repo. 
Follow GitHub instruction on
[how to fork a repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

```bash
git clone https://github.com/carlosmperezm/members-only
```

### Move into the new directory created

```bash
cd members-only/
```

### Install dependencies

```bash
npm install
```

### Create a file to hold the environment variables

```bash
touch .env
```

### Set up a PostgreSql database

You can either run it locally or through a hosting provider. You're gonna need the string connection to the database.
So make sure you have it handy.

### Populate the database by running

```bash
node db/seed.js "<your-db-string-connection>"
```

This will populate the database with the necessary tables and row to work.

### Run the app locally

```bash
npm start
```

Now you can access the app by going to `http://localhost:3000/`.

## Environment Variables

In the `.env` file, we need to have a few variables so that the app can run smoothly. The `.env` should look similar to this:

```properties
DB_CONNECTION='<your-db-string-connection>'
SESSION_SIGN='randomText'
PORT=8000
```

### DB_CONNECTION

Necessary to establish a connection with your database, whether is local or in a hosting provider
This string connection is required also at time of populating the database

### PORT

This is the port where the server is listening. The server has a default port to `3000`. You might want to create this `PORT` in your `.env` if the port 3000 is being used in your system by any other application.

### SESSION_SIGN

This is where express-session look for to sign and validate the cookies and sessions. It does not have to be something special, but it's important to have in the your `.env` file since can lead to some errors in the session.

## Database schema

### Users table

```sql
TABLE users(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(255),
    is_member BOOLEAN,
    is_admin BOOLEAN
);
```

### Messages table

```sql
TABLE messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    author INT REFERENCES users(id) ON DELETE SET NULL
);

```

## License

 [The MIT License](https://github.com/carlosmperezm/members-only/tab=License-1-ov-file#)
