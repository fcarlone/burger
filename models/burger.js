// Import ORM
let orm = require("../config/orm.js");

// ORM functions
let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (columnName, values, cb) {
    orm.insertOne("burgers", columnName, values, function (result) {
      cb(result)
    });
  },
  updateOne: function (columnNameValue, condition, cb) {
    orm.updateOne("burgers", columnNameValue, condition, function (result) {
      cb(result);
    });
  },
  // Added Feature - delete all devoured burgers
  deleteAllDevoured: function (columnName, cb) {
    orm.deleteAllDevoured("burgers", columnName, function (res) {
      cb(res)
    });
  }
};

// Export database functions for the controller
module.exports = burger;
