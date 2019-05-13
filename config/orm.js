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
      return cb(result);
    });
  },
  insertOne: function (tableName, columnName, values, cb) {
    let queryString = `INSERT INTO ${tableName} (${columnName[0]}) VALUES ("${values[0]}");`;

    connection.query(queryString, values, function (err, result) {
      if (err) {
        throw err;
      }
      return cb(result);
    });
  },
  updateOne: function (tableName, columnNameValue, condition, cb) {
    let columnNameValueKeyName = Object.keys(columnNameValue);
    let queryString = `UPDATE ${tableName} SET ${columnNameValueKeyName[0]} = true WHERE ${condition};`

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      return cb(result);
    });
  },
  // Added Feature - delete all devoured burgers
  deleteAllDevoured: function (tableName, columnName, cb) {
    let queryString = `DELETE FROM ${tableName} WHERE ${columnName} = true;`;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      return cb(result);
    })
  }
};

// Export ORM object for the model
module.exports = orm;
