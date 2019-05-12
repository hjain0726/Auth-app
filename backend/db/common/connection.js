const mongoose = require('mongoose');
const dbConfig = require('./config');

mongoose.connect(dbConfig.dbUrl);

module.exports = mongoose;