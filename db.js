var mysql = require("mysql");
//connection base de donnees
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});
connection.connect(function(error){if (error) console.log(error);});
