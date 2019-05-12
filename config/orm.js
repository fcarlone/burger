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
  },
  insertOne: function (tableName, columnName, values, cb) {
    let queryString = `INSERT INTO ${tableName} (${columnName[0]}) VALUES ("${values[0]}");`;
    console.log('insertOne queryString', queryString)

    connection.query(queryString, values, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (tableName, columnValues, condition, cb) {
    let queryString = `UPDATE ${tableName} SET devoured = true WHERE ${condition};`
    console.log('updateOne queryString', queryString);

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