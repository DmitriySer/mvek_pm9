const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '../.env' });

// URL подключения к MongoDB
const uri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017`;
// Настройка клиента MongoDB
async function connectToDatabase() {
    try {
        return  await MongoClient.connect(uri);
    } catch (err) {
        console.error("Ошибка подключения к MongoDB:", err);
    }
}

module.exports = connectToDatabase;