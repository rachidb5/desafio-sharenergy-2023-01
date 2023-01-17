const usersModel = require('../models/user');

function user(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
}

user.prototype.register = async function register() {
    this.user = await usersModel.create(this.body);
};

user.finduser = async () => {
    const usuarios = await usersModel.find();
    return usuarios;
};
user.finduserById = async (id) => {
    const usuario = await usersModel.findById(id);
    return usuario;
};
user.delete = async (id) => {
    const usere = await usersModel.findOneAndDelete({ _id: id });
    return usere;
};
user.prototype.edit = async function edit(id) {
    this.user = await usersModel.findByIdAndUpdate(id, this.body);
};
module.exports = user;