const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB, {useNewUrlParser: true});

    // Get the default connection
const db = mongoose.connection;

module.exports = db ;