const clientsModel = require('../Models/client');

function client(body) {
    this.body = body;
    this.errors = [];
    this.client = null;
}

client.prototype.register = async function register() {
    this.client = await clientsModel.create(this.body);
};

client.findclient = async () => {
    const usuarios = await clientsModel.find();
    return usuarios;
};
client.findClientById = async (id) => {
    const usuario = await clientsModel.findById(id);
    return usuario;
};
client.delete = async (id) => {
    const cliente = await clientsModel.findOneAndDelete({ _id: id });
    return cliente;
};
module.exports = client;