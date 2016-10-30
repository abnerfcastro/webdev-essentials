# mean-basics
Basic MEAN stack contact list.

## Step-0: The Very Basics

> DISCLAIMER: I'm really no expert in web applications development, but I am currently learning and loving it! This tutorial is somehow my personal notes on the matter, but feel free to read, follow along, share or modify.

Before getting started, we'll build a very simple server in Node.js. Now for that, of course, you need to have [Node.js](https://nodejs.org/en/ "Node.js homepage") installed.

The purpose for this **Step-0** is to write a very simple (like, very!) `Hello World` on Node.js.

The code is as simple as:

```javascript
var http = require('http');

http.createServer((request, response) => {  
    response.writeHead(200);
    response.write("Hello World!");
    response.end();
}).listen(8000, function() {
    console.log("Listening on port 8000...");
});
```

Node.js works with **modules**. And when you want to use a module, you simply `require('module')` that. In our hello-world server, we want to use the `http` module, hence the first line.

I encourage you to take a look at the HTTP module documentation [here](https://nodejs.org/api/http.html "HTTP documentation"). You'll see that there's a function `createServer` that receives a `requestListener` function and returns a `http.Server` object.

Now, what matters to us here is that one function passed as parameter to `createServer`. It gets two parameters: `request` and `response`. For each HTTP request our server receives, it sends a response that holds an HTTP response code `200` (which means OK). Before effectively sending the response, it also attaches a `Hello World!` message.

Finally, we tell the `http.Server` object `createServer` returns to listen for requests on port `8000`.

Save the script on `server.js` and run it on Command Prompt or Terminal by writing `node server.js`.

To test the server, browse to `localhost:8000` and be amazed by the awesome `Hello World!` message.

