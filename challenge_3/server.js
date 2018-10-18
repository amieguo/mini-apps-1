var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));


app.post('/form1', (req, res) => {
    // console.log(req.body)
    db.insertPurchase(req.body.name, req.body.email, req.body.password, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            // console.log(data)
            res.send(data)
        }
    })
})

app.post('/form2', (req, res) => {
    console.log(req.body)
    db.insertPurchase2(req.body.shipping, req.body.creditcard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(data)
        }
    })
})


app.listen(port, () => console.log(`listening on port ${port}`));