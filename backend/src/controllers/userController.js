const { JWT_SECRET } = require("../services/key");
const jwt = require('jsonwebtoken');

exports.testUser = async (req, res) => {
  try {
    return res.status(200).send("ok");
  } catch (e) {
    return res.status(400).send("bad");
  }
};

exports.login = async (request, res) => {
  try {
    const { userName, password } = request.body;
    const newToken = await jwt.sign({ userName, password }, JWT_SECRET);
    return res.status(200).json({ token: newToken });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};
