"use-strict";
// Write a function that takes a new object as input which has name , age and gender and 
// greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// Also tell the user if they are legal to vote or not

const user = {
    name: "Jainul",
    age: 43,
    gender: "Male"
}

const greetUser = function (user) {
    const gender = user.gender;
    const age = user.age;
    const prefix = gender === "Male" ? "Mr" : gender === "Female" ? "Mrs" : "Others";
    const voteAge = age >= 18 ? "Eligible for vote" : "Minor, you are not eligible for vote";
    return `Hello ${prefix} ${user.name} your age is ${user.age}.\nYou are ${voteAge}`;
}

console.log(greetUser(user));