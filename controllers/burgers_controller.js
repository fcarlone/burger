const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create routes
// GET route
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let burgerObject = {
      burgers: data
    };
    console.log('burger object from controller', burgerObject)
    res.render("index", burgerObject)
  })
});

// POST route
router.post("/api/burgers", function (req, res) {
  console.log('controller body', req.body)
  burger.insertOne(["burger_name", "devoured"], ["test this", false], function (err, result) {
    res.json(result)
  })
})


// Export routes for server.js
module.exports = router;
