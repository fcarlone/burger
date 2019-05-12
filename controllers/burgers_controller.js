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
    // console.log('burger object from controller', burgerObject)
    res.render("index", burgerObject)
  })
});

// POST route
router.post("/api/burgers", function (req, res) {
  // console.log('controller body', req.body)
  burger.insertOne(["burger_name"], [req.body.burger_name], function (err, result) {
    res.json({ id: result });
  })
})

// PUT route
router.put("/api/burgers/:id", function (req, res) {
  let condition = `id=${req.params.id}`;
  console.log('condition', condition)

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})


// Export routes for server.js
module.exports = router;
