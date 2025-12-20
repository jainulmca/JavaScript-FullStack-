// Create a function that takes an array of objects as input, 
// and returns the users whose age > 18 and are male

const users = [
    { name: "Aman", age: 17, gender: "male" },
    { name: "Riya", age: 22, gender: "female" },
    { name: "Karan", age: 19, gender: "male" },
    { name: "Tina", age: 21, gender: "female" }
];

const adultMale = function(users) {
    return users.filter(user => user.age >=18 && user.gender === "male");
}

console.log(adultMale(users));

const adultMaleLoop = function(users) {
    let result = [];
    for(let i=0; i<users.length; i++) {
        if(users[i].age >= 18 && users[i].gender === "male") {
            result = users[i];
        }
    }
    return result;
}
console.log(adultMaleLoop(users));

function getAdultMales(users) {
    const result = [];

    for (const user of users) {
        if (user.age > 18 && user.gender === "male") {
            result.push(user);
        }
    }

    return result;
}
console.log(getAdultMales(users));

function getAdultMalesEach(users) {
    const result = [];

    users.forEach(user => {
        if (user.age > 18 && user.gender === "male") {
            result.push(user);
        }
    });

    return result;
}

console.log(getAdultMalesEach(users));