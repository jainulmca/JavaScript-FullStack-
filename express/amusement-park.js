const express = require('express');

const app = express();

// function ticketChecker(req, res, next) {
//     const ticket = req.query.ticket;
//     if(ticket === "free"){
//         next();
//     } else {
//         res.status(403).send("access denied");
//     }
// }

// function that returns a boolean if the age of the users is less then 14yrs
function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    } else {
       res.json({
        msg: "Sorry you are not of age yet"
       })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", function(req, res) {
    res.json({
        msg: "You have successfully ridden the ride 1"
    })
})

app.get("/ride2", function(req, res) {
    res.json({
        msg: "You have successfully ridden the ride 2"
    })
})

app.listen(3000);