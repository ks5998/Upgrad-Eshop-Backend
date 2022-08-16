module.exports = app => {
    const addresses = require("../Controllers/address_Controller");
  
      var router = require("express").Router();
  
      router.post("/addresses", addresses.address);
  
      app.use(router);
    };