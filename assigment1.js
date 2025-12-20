"use-strict";
// Write a function that takes a user as an input and greets them with their name and age
const user = {
    name: "Jainul",
    age: 43
}
const greetUser = function(user) {
    return `Hello ${user.name} your age is ${user.age}`;
}

const userDetails = greetUser(user);
console.log(userDetails);
