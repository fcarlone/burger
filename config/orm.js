// Import MySQL connection
const connection = require("../config/connection.js")

// ORM methods
// selectAll()
// insertOne()
// updateOne()

var orm = {
  selectAll: function (tableName, cb) {
    let queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export ORM object for the model
module.exports = orm;
