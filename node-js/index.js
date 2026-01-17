
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
const { Command } = require('commander');
// console.log(__dirname + "/index.js" + "../node.js");
const program = new Command();
console.log(process.argv);
program
  .name('counter')
  .description('CLI to count words in file')
  .version('0.0.1');

program
    .command("word_count")
    .description("Count the number of words in a file")
    .argument('<filePath>')
    .action((filePath)=> {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
            } else {
                let total = 0;
                for(i=0; i<data.length; i++) {
                    if(data[i] === " "){
                        total++;
                    }
                }
                console.log(`You hae ${total+1} words in this file`);
            }
        });
    });

program
    .command("line_count")
    .description("Count the number of lines in a file")
    .argument('<filePath>')
    .action((filePath)=> {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
            } else {
                let total = 0;
                for(i=0; i<data.length; i++) {
                    if(data[i] === "\n"){
                        total++;
                    }
                }
                console.log(`You hae ${total+1} lines in this file`);
            }
        });
    });    

program.parse();

// const filePath = path.join(__dirname, 'a.txt');

// function main(fileName) {
//     console.log(process.argv);
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         let total = 0;
//         for(i=0; i<data.length; i++) {
//             if(data[i] === " "){
//                 total++;
//             }
//         }
//         console.log(`You hae ${total+1} words in this file`);
//         // if(err) {
//         //     console.log(err);
//         // } else {
//         //     console.log(data);
//         // }
//     });
// }

// main(process.argv[2]);
