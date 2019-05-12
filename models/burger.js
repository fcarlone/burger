// Import ORM
let orm = require("../config/orm.js");

// ORM functions
let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      console.log('response from orm', res);
      cb(res);
    });
  },
  insertOne: function (columnName, values, cb) {
    orm.insertOne("burgers", columnName, values, function (result) {
      cb(result)
    });
  },
  updateOne: function (columnValues, condition, cb) {
    orm.updateOne("burgers", columnValues, condition, function (result) {
      cb(result);
    });
  }

};

// Export database functions for the controller
module.exports = burger;
