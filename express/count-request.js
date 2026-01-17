// Assigment
// Create a middleware that count's the number of request coming to the server
const express = require('express');
const app = express();

// let requestCount = 0;
// function requestCountFunc(req, res, next){
//  requestCount = requestCount + 1;
//  next();
//  console.log(requestCount);
// }
// app.use(requestCountFunc);

// app.get('/test', function(req, res) {

// })
let numberOfRequestForUser = {};
setInterval(()=>{
    numberOfRequestForUser = {}
}, 2000);

app.use(function(req, res, next){
    const userId = req.headers["user-id"];
    if(numberOfRequestForUser["user-id"]) {
        numberOfRequestForUser["user-id"] = numberOfRequestForUser["user-id"]+1;
        if(numberOfRequestForUser > 1) {
            res.status(404).send("No entry");
        } else {
            res.json({
                msg: "use it"
            })
            next();
        }
    } else {
        numberOfRequestForUser["user-id"] = 1;
        next();
        console.log(numberOfRequestForUser)
    }
})

app.listen(3000);

// Headers
// HTTP headers are key-value pairs sent between a client (like a we browser)
// and a server in an HTTP request or response.
// To convey metadata about the request or response, such as content type, auth information, etc.

// Response Headers
// The headers that the serer respons with are known as the response header


// Fetch API
//  1. From the browser URL (Default GET request)
// When you type a URL into the browser’s address bar and press Enter, the browser sends 
// an HTTP GET request to the server. This request is used to retrieve resources like 
// HTML pages, images, or other content.

// 2. From an HTML form or JavaScript(various request types)
// HTML Forms: When a user submits a form on a webpage, the browser sends an HTTP request based 
// on the form’s method attribute, which can be GET or POST. Forms with method="POST" typically 
// send data to the server for processing (e.g., form submissions).
// JavaScript (Fetch API): JavaScript running in the browser can make HTTP requests to a server 
// using APIs the fetch API. These requests can be of various types (GET, POST, PUT, DELETE, etc.)
// and are commonly used for asynchronous data retrieval and manipulation (e.g., AJAX requests).


