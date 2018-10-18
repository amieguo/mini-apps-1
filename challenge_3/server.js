var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));


app.post('/form', (req, res) => {
    res.send('hi')
})


app.listen(port, () => console.log(`listening on port ${port}`));