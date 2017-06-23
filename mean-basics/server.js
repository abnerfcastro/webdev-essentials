
var express = require('express');
var app = express();
var database = require('./dummy-data.js');
var bodyParser = require('body-parser');

var port = process.env.port || 8000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/data', function(request, response) {
    console.log("Just got a GET request. Sending out data.");

    // var data = database.find(2);
    // console.log(data);

    // var stark = {"name": "Tony Stark", "email": "stark@email.com", "phone": "+1-202-555-8672"};
    // database.insert(stark, function(err, doc) {
    //     console.log(err);
    //     console.log(doc);
    // });  

    response.send(database.values);    
});

app.get('/data/:id', function(request, response) {
    var id = request.params.id;
    database.find(id, function(err, doc) {
        if (err) {
            console.error(err);
            response.status(500).send(err);
        }
        else
        {
            response.send(doc);
        }
    })
});

app.post('/data', function(request, response) {
    console.log("Just got a POST request. Attempting to insert data.");
    database.insert(request.body, function(err, doc) {
        if (err) {
            console.error(err);
            response.status(500).send("There was something wrong.");
        }
        else
        {
            response.send(doc);
        }
    });
});

app.put('/data/:id', function(request, response) {
    
});

app.delete('/data/:id', function(request, response) {
    console.log('Just got a DELETE request. Attempting to delete data.');
    var id = request.params.id;

    database.remove(id, function(err, doc) {
        if (err) {
            console.error(err);
            response.status(500).send("There was something wrong.");            
        }
        else {
            response.send(doc);
        }
    });
});

app.listen(port, function() {
    console.log('Using Express -- app listening on port 8000...');
});