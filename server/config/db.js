//database connection to the backend

const {Pool} = require('pg'); //pg is a library in Node, that will talk to PostgreSQL
//pool will have many connections so multiple users ask for data

require('dotenv').config(); //loads env file

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.on('connect', () => {
    console.log('Connected to PostgreSQL');
});

module.exports = pool;
