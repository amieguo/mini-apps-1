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


var insertPurchase = function(name, email, password, callback) {
    var queryStr = `INSERT INTO purchase (personname, email, pwd) VALUES (?, ?, ?)`
    connection.query(queryStr, [name, email, password], function(error, results) {
        if (error) {
            console.log(error)
        } else {
            callback(null, results);
        }
    })
}

var insertPurchase2 = function(shipping, creditcard, callback) {
    var queryStr = `INSERT INTO purchase (shipaddress, creditcard) VALUES (?, ?)`
    connection.query(queryStr, [shipping, creditcard], function(error, results) {
        if (error) {
            console.log(error)
        } else {
            callback(null, results);
        }
    })
}

module.exports.insertPurchase = insertPurchase;
module.exports.insertPurchase2 = insertPurchase2;

// shipaddress, creditcard, 