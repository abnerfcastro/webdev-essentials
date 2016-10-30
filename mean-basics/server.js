// This is how modules are required
var http = require('http');

http.createServer((request, response) => {  
    response.writeHead(200);
    response.write("Hello World!");
    response.end();
}).listen(8000, function() {
    console.log("Listening on port 8000...");
});