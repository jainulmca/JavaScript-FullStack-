const express = require('express');
const app = express();

let users = [
    {
        name:'John',
        kidneys: [
            {
                healthy: false
            },
            {
                healthy: true
            }
        ]
    }
]

app.use(express.json());

// route handlers
app.get('/', function(req, res) {
    const johnKidey = users[0].kidneys;
    const numberOfKidney = johnKidey.length;
    let numberOfHealthyKidney = 0;
    for(let i=0; i<johnKidey.length; i++) {
        if(johnKidey[i].healthy) {
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
        }
    }

    let numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
    console.log(johnKidey);
})

app.post('/', function(req, res) {
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', function(req, res) {
    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "put done!"})
})

app.delete('/', function(req, res) {
    function isThereAtleastOneUnhealthyKidney(){
        let atleastOneUnhealthyKidney = false;

        for(let i=0; i<users[0].kidneys.length; i++) {
            if(!users[0].kidneys[i].healthy) {
                atleastOneUnhealthyKidney = true;
            }
        }

        return atleastOneUnhealthyKidney;
    }

    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({healthy: true})
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done"});
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
})

app.listen(3000);