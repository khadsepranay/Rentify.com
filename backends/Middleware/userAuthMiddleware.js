require("dotenv").config();
const jwt = require("jsonwebtoken");

const userAuthMiddleware = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.send("Please Provide Token");
  } else {
    try {
      const user = await jwt.verify(token, "AccessToken");
      console.log(user);
      req.body.user = user.user;
      next();
    } catch (err) {
      res.send(err);
    }
  }
};
module.exports = { userAuthMiddleware };
