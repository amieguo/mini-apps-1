const express = require('express');
const app = express();
const port = 3000;
// const $ = require('jquery')
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 



app.use(express.static('./client'))



app.post('/sales_report', (req, res) => { 
    var text = req.body.sometext;
    console.log(req.body)
    var par = JSON.parse(text);
    var fields = Object.keys(par);
    // res.send(req.data)
    // var smth = (typeof text)
    let csv = fields.map(row => fields.map(fieldName => JSON.stringify(row[fieldName])).join(','))
    csv.unshift(fields.join(','))
    csv = csv.join('\r\n')
    // // fs.writeFile 
    // console.log(req.data);
    // res.send(JSON.stringify(req.data));
    res.send(csv);
    
});








app.listen(port, () => console.log(`Listening on port ${port}...`));


