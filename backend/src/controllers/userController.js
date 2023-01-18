const { JWT_SECRET } = require("../services/key");
const jwt = require('jsonwebtoken');

exports.login = async (request, res) => {
  try {
    const { userName, password } = request.body;
    const newToken = await jwt.sign({ userName, password }, JWT_SECRET, { expiresIn: 8*60*60});
    return res.status(200).json({ token: newToken });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
};
