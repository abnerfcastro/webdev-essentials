# mean-basics
Basic MEAN stack contact list app.

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

## Step-1: Slightly More Sophisticated Hello World

Before moving on to Express.js, I found this great [Express.js Crash Course](https://www.youtube.com/watch?v=aHqnFWLP7wA&t=658s "YouTube video: Express.js Crash Course") on YouTube. Express.js provides a thin layer on top of the http module, making it easier to use and more powerful -- like libraries usually do.

The sophistication, however, is: so far we made the server respond with a message. How about a server that responds a `index.html` file? Let's dive into it!

Modify `server.js` to look like this:

```javascript
var http = require('http'),
    fs = require('fs'),
    path = require('path');

var app = http.createServer((request, response) => {
    // Finds index.html file inside the root folder
    var index = path.join(__dirname, 'index.html');

    if (request.url == '/' || request.url == '/index.html') {        
        fs.readFile(index, function(err, data) {
            if (err) {
                console.error(err);
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.end('500 Server Error');
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }
        });
    } else {
        // If request url is something different than the root folder
        console.log('Resource not found: ' + request.url);
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Page Not Found');
    }

});

app.listen(8000, 'localhost');

console.log('Listening on port 8000...');
```

If you really look into it, it's not that complicated. We're still using `http.createServer`, but instead of simply writing a `Hello World!` message, we look for file `index.html` that sits on the `/` root folder. For that we `require` the `fs` (filesystem) and the `path` modules. The rest is pretty intuitive.

Oh, of course! When calling `response.end()`, we can pass a message or file as parameter. Similar to `response.write('message')` and then calling the `end()` function.

It ain't over yet. We need to write that `index.html` file. It can be ANY HTML file, as long as the filename is `index`. To keep the hello-world spirit, I wrote something like this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example Page</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>This is an example page.</p>
    </body>
</html>
```

Save it in the same folder as `server.js`. Now browse to `localhost:8000` and, well, you know...

## Step-2: Hello World in Express.js

> [Express.js](http://expressjs.com/ "Express.js website"): Fast, unopinionated, minimalist web framework for Node.js

Now we will write a `hello-world` example in Express.js. It is supposed to simplify but yet enhance Node.js `http` module.

Before just jumping into Express.js itself, we need to install it. From now on, let it be clear that Express.js is not part of Node, we need to import/install it on our project's directory folder. The easiest way to do that is through the command prompt. Start it and browse to your `server.js` root folder and type `npm install express`. `npm` is a package manager that comes along with Node.js installation. By typing that command, `npm` will intall Express.js on a folder called `node_modules`. We call that your project's dependencies, and a project can have many dependencies. If you had to `npm install` each one of them every time you needed to install your project (we don't usually commit `node_modules` folder... it goes to `.gitignore`), it would be time consuming and you'd have to keep a list of your dependencies, right?

In that scenario, file `package.json` comes to the rescue. It's a file that holds every information about your project, including its dependencies. Better yet, when you have such file that lists all of your dependencies, you simply type `npm install` once, and it will install everything on `node_modules` folder. 'Nough talking, let's create our `package.json` file!

This is the skeleton of `package.json`:

```json
{
    "name": "mean-basics",
    "description": "Basic MEAN stack contact list app.",
    "version": "1.0.0",
    "author": {
        "name": "Abner Castro"
    },
    "scripts": {
        "prestart": "npm install",
        "start": "node server.js"
    },
    "dependencies": {
    }
}
```

We can manually add `"express": "^4.14.0"` inside `dependencies` or type in command prompt `npm install express --save`. With `--save`, `npm` will add Express.js to the list of your dependencies in `package.json`.

One of the coolest things about `package.json` is that we can setup states like `prestart` and `start`. That way, if none of the dependencies are installed on `node_modules`, when you type `npm start`, it will automatically download everything you need for the project to run. Well, everything you listed as a dependency, at least...

Now we are ready to import... I mean, `require` Express.js to our project. Modify `server.js` to:

```
```


