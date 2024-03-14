require('dotenv').config(); //load envVar from my .env file

const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URI
const client = new MongoClient(url);
const dbName = 'LibraryManagementSystem';
let _db;

module.exports = {

    connectToServer: async function (callback) {
        try {
            await client.connect();
            console.log('Connected successfully to server');
            const db = client.db(dbName);
            _db = db;
            callback()
        } catch (err) {
            callback(err);
        }
    },

    getDb: function () {
        return _db;
    }
};