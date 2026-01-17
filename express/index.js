const express = require('express');
const app = express();

// route handlers
app.get('/', function(req, res) {
    res.send('Hello World!');
})

app.get('/jainul', function(req, res) {
    const m = req.query.m;
    console.log(req.query);
    res.send(`<h1>Hello from Jainul</h1> ${m}`);
})

app.post('/', function(req, res){
    res.send('Post request');
})

app.listen(3003) // which port