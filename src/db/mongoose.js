const mongoose = require('flea-nodejs/src/db/mongoose');

const dbUrl = process.env.MONGODB_URL;
const dbPort = process.env.MONGODB_PORT;
const dbName = process.env.MONGODB_NAME;

const connectionUrl = 'mongodb://' + dbUrl + ':' + dbPort + '/' + dbName;
mongoose.connect(connectionUrl, {});