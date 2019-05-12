const mongoose = require('../common/connection');

var Schema = mongoose.Schema;

var signupSchema = new Schema({
    email: String,
    password: String
});

var userModel = mongoose.model('userModels', signupSchema);

module.exports = userModel;