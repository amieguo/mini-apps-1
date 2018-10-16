const express = require('express');
const app = express();
const port = 3000;
const $ = require('jquery')
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.use(express.static('./client'))

// var items = document.getElementById('app').value
// document.getElementById('btn').addEventListener('click', clicked);;
// var fields = Object.keys(json[0]);
// let csv = items.map(row => fields.map(fieldName => JSON.stringify(row[fieldName])).join(','))
// csv = csv.join('\r\n')
// console.log(csv)


app.post('/sales_report', (req, res) => { 
    // if (err) {
    //     res.status(500).send(); 
    // } else {
        // res.send(req.body);
        res.send(req.body)
        // res.send( req.body.sometext)


        // "hello",
        
    
    
});



// $.ajax({method: 'POST', url: '/sales_report', })




app.listen(port, () => console.log(`Listening on port ${port}...`));


