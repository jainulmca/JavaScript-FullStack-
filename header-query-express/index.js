// Create an HTTP Server
// It should have 4 routes add, substract, multiply, divide
// Inputs given at the end after ? are known as query parameter (usually used in GET requests)
// http://localhost:3000/add?a=1&b=2
// http://localhost:3000/substract
// http://localhost:3000/multiply
// http://localhost:3000/divide

// const express = require("express");
// const app = express();

// app.get("/add", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a+b,
//     })
// })

// app.get("/substract", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a-b,
//     })
// })

// app.get("/multiply", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a*b,
//     })
// })

// app.get("/divide", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a/b,
//     })
// })

// app.listen(3000);


// Middlewares
// In Express.js Middleware referes to functions that have access to the request(req) object,
// response object(res), and the next function in the applications requests-response cycle.
// Biggest use of middleware is authentaction
// Express is nothing but chain of middleware.
// Middleware functions can perfrom varity of tasks, such as:
// 1. Modifying the request or response objects
// 2. Ending the request-response cycle.
// 3. Calling the next middleware function in the stack.

// Modifying the request object
// const express = require("express");
// const app = express();

// app.use(function(req, res, next){
//     req.name = "jainul",
//     next();
// })

// app.get("/add", function(req, res){
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a+b,
//     })
// })

// app.listen(3000);


// Ending the request/response cycle
// const express = require("express");
// const app = express();

// app.use(function(req, res, next){
//     req.name = "jainul";
//     res.json({
//         message: "You are not allowed",
//     })
// })

// app.get("/add", function(req, res){
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a+b,
//     })
// })

// app.get("/substract", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a-b,
//     })
// })

// app.listen(3000);


// Dynamic route handler
// The way to create dynamic end point in express is "/add/:a/:b"
// const express = require("express");
// const app = express();

// app.get("/add/:firstArg/:secodnArg", function(req, res){
//     const a = parseInt(req.params.firstArg);
//     const b = parseInt(req.params.secodnArg);
//     res.json({
//         ans: a+b,
//     })
// })


// app.listen(3000);


// Calling the next middleware function in the stack
// const express = require("express");
// const app = express();

// const { MongoClient } = require('mongodb');

// app.use(function(req, res, next) {
//     console.log("request received");
//     next();
// })
// app.get("/sum", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a+b,
//     })
// })


// app.listen(3000);

// Route specific middlewares
// 


// const express = require("express");
// const app = express();

// // Middleware function
// function logRequest(req, res, next){
//     console.log(`Request made to: ${req.url}`);
//     next();
// }

// // Apply middleware to a specific route
// app.get('/special', logRequest, function(req, res){
//     res.send("This route uses route specific middleware");
// })

// app.get("/sum", logRequest, function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a+b,
//     })
// })

// app.listen(3000);


// Assignments on middleware
// Try these out yourself.
// 1.	Create a middleware function that logs each incoming request’s HTTP method,
// URL, and timestamp to the console
// 2.	Create a middleware that counts total number of requests sent to a server. 
// Also create an endpoint that exposes it


// const express = require("express");
// const app = express();

// // Middleware function
// function loggerMiddleware(req, res, next){
//     console.log(`Method is: ${req.method}`);
//     console.log(`Request made to: ${req.url}`);
//     console.log(`Host is: ${req.hostname}`);
//     console.log(new Date());
//     next();
// }

// app.use(loggerMiddleware);

// app.get("/sum", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a+b,
//     })
// })


// app.listen(3000);



// Commonly used middlewares
// Through your journey of writing express servers , you’ll find some commonly available (on npm) 
// middlewares that you might want to use
// 1. express.json
// The express.json() middleware is a built-in middleware function in Express.js 
// used to parse incoming request bodies that are formatted as JSON. 
// This middleware is essential for handling JSON payloads sent by clients in POST or PUT requests.


// const express = require("express");
// const app = express();

// // Use express.json() middleware to parse JSON bodies
// app.use(express.json());

// app.get("/sum", function(req, res){
//     const a = parseInt(req.body.a);
//     const b = parseInt(req.body.b);
//     res.json({
//         ans: a+b,
//     })
// })


// app.listen(3000);

// In Express if you want to send JSON data
// you need to parse the json data



// CORS (Cross origin resource sharing)
// CORS is a security feature implemented by web browsers that controls how resources on a web server
// can be requested from another domain It's a crucial mechanism for managing cross-origin requests and 
// ensuring secure interactions between different origins on the web.


// Assignment
// 1. Create a backend server in node.js, that returns the sum endpoint
// 2. Write a HTML file, that hits the backend server using the 'fetch' api.

// const express = require("express");
// const cors = require("cors");
// const app = express();

// // Use express.json() middleware to parse JSON bodies
// app.use(express.json());
// app.use(cors()); // it allows frontend request to access

// // You can restrict what frontend can send the request
// // app.use(cors(["http://google.com", ]));
// app.post("/sum", function(req, res){
//     const a = parseInt(req.body.a);
//     const b = parseInt(req.body.b);
//     res.json({
//         ans: a+b,
//     })
// })

// app.listen(3000);

// How to make frontend server
// 1. create public folder
// 2. Using cmd got that folder and run command "npx serve". 
// what is commd do? It serve a folder over http.
// So, if you are on same network then you can serve and access on 
// other laptop as well by using network endpoint


// How can you make it work?
// There is cors external library
// 1 Installing cors library
// 2 require that library locally
// 3 adding a middleware

// if I host my frontend in same network then we don't ned cors

const express = require("express");
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/index.html");
})

// You can restrict what frontend can send the request
// app.use(cors(["http://google.com", ]));
app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans: a+b,
    })
})

app.listen(3000);


