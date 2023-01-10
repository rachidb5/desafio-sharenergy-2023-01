const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
}, { versionKey: false });

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;