// Import ORM
let orm = require("../config/orm.js");

// ORM functions
let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      console.log('response from orm', res);
      cb(res);
    });
  }
};


// Export database functions for the controller
module.exports = burger;
