const express = require('express');
const route = express.Router();

const { testUser, login } = require('../controllers/userController')
const { loginAuth, loginPasswordAuth } = require('../services/userService')

route.get("/test", testUser)
route.post("/login", loginAuth, loginPasswordAuth, login)

module.exports = route;