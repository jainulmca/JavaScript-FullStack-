// Write a function that takes an array of users as inputs and returns only 
// the users who are more than 18 years old

const users = [
    { name: "Aman", age: 17 },
    { name: "Riya", age: 22 },
    { name: "Karan", age: 19 },
    { name: "Tina", age: 15 }
];

const getAdults = function(users) {
    return users.filter(user => user.age >= 18);
}

console.log(getAdults(users));

const getAdultsUsingLoop = function(users) {
    const result = [];
    for(i=0; i<users.length; i++) {
        if(users[i].age >= 18) {
            result.push(users[i]);
        }
    }
    return result;
}

console.log(getAdultsUsingLoop(users));

