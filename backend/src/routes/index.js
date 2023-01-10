const express = require('express');
const route = express.Router();

const { testUser, login } = require('../controllers/userController')
const { newClient, showClients, showClientById, deleteClient } = require("../controllers/clientController")
const { loginAuth, loginPasswordAuth } = require('../services/userService')

route.get("/test", testUser)
route.post("/login", loginAuth, loginPasswordAuth, login)
route.post("/novo-cliente", newClient)
route.get("/clientes", showClients)
route.get("/clientes/:id", showClientById)
route.delete("/clientes/:id", deleteClient)

module.exports = route;