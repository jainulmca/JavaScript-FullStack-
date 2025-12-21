
// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// // Combine styled and normal strings
// console.log(chalk.blue('Hello') + ' ' + chalk.red('World !'));

// const sum = function (a, b) {
//     return a + b;
// }

// const multiply = function (a, b) {
//     return a * b;
// }

// console.log(sum(1,2));
// console.log(multiply(1,2));

const fs = require('fs');
const path = require('path');
// console.log(__dirname + "/index.js" + "../node.js");

const filePath = path.join(__dirname, 'a.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});