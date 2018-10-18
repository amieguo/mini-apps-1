var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'checkout'
});

// var startPurchase = function() {
//     connection.query( , function() {

//     })
// }


var insertPurchase = function(personname, email, pwd, callback) {
    var queryStr = `INSERT INTO checkout (personname, email, pwd) VALUES (?, ?, ?)`
    connection.query(queryStr, [personname, email, pwd], function(error, results) {
        callback(error, results);
    })
}

module.exports.insertPurchase = insertPurchase;

// shipaddress, creditcard, 