const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create routes
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let burgerObject = {
      burgers: data
    };
    console.log('burger object from controller', burgerObject)
    res.render("index", burgerObject)
  })
});


// Export routes for server.js
module.exports = router;
