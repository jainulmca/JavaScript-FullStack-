// What is Authentication?
// The process of letting users sing in/sign out of your website.
// Making sure your routes are protected and users can only get back
// their own data and not the data from a different user

// What is tokens?
// Tokens is waht stores your information and gives you persistent sessions.
// You login once and the website is open for you forever, until you logout.

// 1. The user comes to your website
// 2. The user sends a request to /signin with their username and password
// The user gets back a token
// In every subsequest request, the user sends the token to identify itself to the backend

// const express = require("express");
// const app = express();

// app.use(express.json());

// const users = [];
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
//         'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
//         'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
//         'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//         let token ="";

//         for (let i=0; i<options.length; i++) {
//             token += options[Math.floor(Math.random()*options.length)];
//         }

//     return token;
// }

// app.post("/signup", (req, res)=>{
//     const username = req.body.username;
//     const password = req.body.password;
//     users.push({username, password});
//     res.send({message: "You have signed up"});
// });

// app.post("/signin", (req, res)=>{
//     const username = req.body.username;
//     const password = req.body.password;
    
//     const user = users.find(user => user.username === username && user.password === password);

//     if(user) {
//         const token= generateToken();
//         user.token = token;

//         res.send({
//             token
//         })
//         console.log(users);
//     } else {
//         res.status(403).send({
//             message: "Invalid username and password"
//         })
//     }
// });

// app.get("/contact", (req, res)=>{
//     const token = req.headers.authorization;
//     const user = users.find(user => user.token === token);
//     if(user) {
//         res.send({
//             username: user.username
//         })
//     } else {
//         res.status(401).send({
//             message: "Unauthorized"
//         })
//     }
// })


// app.listen(3000);


// JWTs (JSON web tokens)
// JWTs or JSON Web Tokens are a compact and self-contained way to 
// represent information between two parties.
// They are commonly used for authentication and information exchange 
// in web appications

// JWTs are Stateless
// JWTs contain all the information needed to authenticate a request,so the
// server doesn't need to store session data. All the data is stored in the token itself.

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRET = "USER_APP";
const app = express();

app.use(express.json());
app.use(cors());

const users = [];
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
//         'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 
//         'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
//         'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//         let token ="";

//         for (let i=0; i<options.length; i++) {
//             token += options[Math.floor(Math.random()*options.length)];
//         }

//     return token;
// }

app.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({username, password});
    res.send({message: "You have signed up"});
});

app.post("/signin", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    const user = users.find(user => user.username === username && user.password === password);

    if(user) {
        // const token= generateToken();
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);
        user.token = token;

        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username and password"
        })
    }
});

app.get("/contact", (req, res)=>{
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);
    const username = userDetails.username;
    const user = users.find(user => user.token === token);
    if(user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})


app.listen(3000);