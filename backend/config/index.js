const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT,
    MONGO_DB_URI: process.env.MONGO_URI,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET ,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY ,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL_SECRET: process.env.EMAIL_SECRET,
    FROM_EMAIL: process.env.FROM_EMAIL,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};

module.exports = config;