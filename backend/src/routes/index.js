const express = require('express');
const route = express.Router();

const { testUser, login } = require('../controllers/userController')
const { newClient, showClients, showClientById, deleteClient, updateClientById } = require("../controllers/clientController")
const { loginAuth, loginPasswordAuth } = require('../services/userService')
const { clientAuth } = require('../helpers/clientValidator')

route.get("/test", testUser)
route.post("/login", loginAuth, loginPasswordAuth, login)
route.post("/novo-cliente", clientAuth, newClient)
route.get("/clientes", showClients)
route.get("/clientes/:id", showClientById)
route.delete("/clientes/:id", deleteClient)
route.put("/clientes/:id", clientAuth, updateClientById)

module.exports = route;