const Client = require("../services/clientSerevice");
const { JWT_SECRET } = require("../services/key");
const jwt = require("jsonwebtoken");

exports.newClient = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) { return res.status(401).json({ message: 'Usuario não autenticado' }); } 
    const payload = jwt.verify(token, JWT_SECRET);
    const clients = new Client(req.body);
    await clients.register();
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.showClients = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) { return res.status(401).json({ message: 'Usuario não autenticado' }); } 
    const payload = jwt.verify(token, JWT_SECRET);
    const clients = await Client.findclient();
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.showClientById = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) { return res.status(401).json({ message: 'Usuario não autenticado' }); } 
    const payload = jwt.verify(token, JWT_SECRET);
    const clients = await Client.findClientById(req.params.id);
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};
exports.updateClientById = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) { return res.status(401).json({ message: 'Usuario não autenticado' }); } 
    const payload = jwt.verify(token, JWT_SECRET);
    const clients = new Client(req.body);
    await clients.edit(req.params.id);
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) { return res.status(401).json({ message: 'Usuario não autenticado' }); } 
    const payload = jwt.verify(token, JWT_SECRET);
    await Client.delete(req.params.id);
    const clients = await Client.findclient();
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};
