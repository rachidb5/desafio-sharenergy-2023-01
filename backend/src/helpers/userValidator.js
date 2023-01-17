const usersModel = require("../models/user")

const loginAuth = async (req, res, next) => {
    const { userName } = req.body;
    const { password } = req.body;
    if (userName === undefined || password === undefined) {
        return res.status(401).json({ message: 'Todos os campos devem ser preenchidos' });
    }
    next();
};

const loginPasswordAuth = async (req, res, next) => {
    const { userName } = req.body;
    const { password } = req.body;
    const users = await usersModel.find()
    const usersNames = users.filter((user) => user.userName === userName);
if (usersNames.length < 1 || usersNames[0].password !== password) {
    return res.status(401).json({ message: 'Usuario ou senha incorretos' });
} 
next();
};

module.exports = {
    loginAuth,
    loginPasswordAuth 
};