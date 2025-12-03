const mysql = require("mysql2/promise");

const getConnection = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        database: "proyectosmolones",
        user: process.env.USER_WORKBENCH,
        password: process.env.PASSWORD_WORKBENCH,
    });
    await connection.connect();

    return connection;
};

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

module.exports = {
    getConnection,
};
