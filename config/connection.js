// Setup MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

// Connection
connection.connect(function(err) {
    if(err) {
        console.log("error connecting: "+ err.stack);
        return;
    }
    console.log("Connected as id "+ connection.threadId);
});

// To export
module.exports = connection;