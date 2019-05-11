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
    console.log()
    let queryString = `INSERT INTO ${tableName} (${columnName[0]}, ${columnName[1]}) VALUES (${values[0]}, ${values[1]});`;
    console.log('insertOne queryString', queryString)

    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ('NEw Test', false);", values, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    })
  }
};

// Export ORM object for the model
module.exports = orm;
