
var express = require('express');
var app = express();

var port = process.env.port || 8000;

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.listen(port, function() {
    console.log('Using Express -- app listening on port 8000...');
})