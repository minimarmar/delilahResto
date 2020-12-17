const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    port: process.env.APP_PORT,
    jwtSecret: process.env.JWT_SECRET,
    database: {
        dialect: process.env.DB_DIALECT,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    },
    salt: process.env.SALT
}