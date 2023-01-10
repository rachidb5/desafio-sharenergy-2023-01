const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    address: { type: String, require: true },
    cpf: { type: String, require: true },
}, { versionKey: false });

const clientsModel = mongoose.model('clients', clientsSchema);

module.exports = clientsModel;