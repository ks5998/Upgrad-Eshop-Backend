const auth = require("../Middleware/auth"); 

module.exports = app => {
  const users = require("../Controllers/user_Controller");

    var router = require("express").Router();

    router.post("/auth", users.login);

    router.post("/user", users.signUp);

    app.use(router);
  };