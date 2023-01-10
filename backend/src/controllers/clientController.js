const Client = require("../services/clientSerevice");

exports.newClient = async (req, res) => {
  try {
    const clients = new Client(req.body);
    await clients.register();
    return res.status(201).json(clients)
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.showClients = async (req, res) => {
  try {
    const clients = await Client.findclient();
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.showClientById = async (req, res) => {
  try {
    const clients = await Client.findClientById(req.params.id);
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.updateClientById = async (req, res) => {
  try {
    const clients = await Client.findClientById(req.params.id);
    return res.status(201).json(clients);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};

exports.deleteClient = async (req, res) => {
    try{
        await Client.delete(req.params.id)
        const clients = await Client.findclient();
        return res.status(201).json(clients);
    } catch(e) {
        console.log(e);
        return res.status(400).json({ error: e }); 
    }
}