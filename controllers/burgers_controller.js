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
    res.render("index", burgerObject)
  })
});

// POST route
router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function (err, result) {
    res.json({ id: result });
  })
});

// PUT route
router.put("/api/burgers/:id", function (req, res) {
  let condition = `id=${req.params.id}`;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

// Added Feature - delete all devoured burgers
router.delete("/api/burgers", function (req, res) {
  burger.deleteAllDevoured(["devoured"], function (result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

router.get("/api/burgers", function (req, res) {
  burger.selectAll(function (data) {
    console.log('Display burger data:', data)
    res.json(data)
  })
});

// Export routes for server.js
module.exports = router;
