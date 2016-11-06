
var express = require('express');
var app = express();

var port = process.env.port || 8000;

app.use(express.static(__dirname));

app.get('/data', function(request, response) {
    console.log("Just got a GET request. Sending out data.");
    
    var batman = {"name": "Wayne, Bruce", "email": "wayne@email.com", "phone": "+1-202-555-0163"};
    var spider = {"name": "Parker, Peter", "email": "parker@email.com", "phone": "+1-202-555-0149"};
    var widow  = {"name": "Romanova, Natasha", "email": "romanova@email.com", "phone": "+1-202-555-0142"};    

    var chars = [batman, spider, widow];

    response.send(chars);    
});

app.listen(port, function() {
    console.log('Using Express -- app listening on port 8000...');
})