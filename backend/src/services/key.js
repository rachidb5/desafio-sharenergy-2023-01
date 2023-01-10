const JWT_SECRET = process.env.JWT_SECRET || 'chave213';
require('dotenv').config();

module.exports = { JWT_SECRET };