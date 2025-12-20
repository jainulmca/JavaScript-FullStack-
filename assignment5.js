// Write a function called sum that finds the sum from 1 to a number
const numberSum = function(num) {
    let sum =0;
    for(let i=1; i<=num; i++){
        sum +=i;
    }
    return sum;
}

console.log(numberSum(5));

// Using a mathematical formula (Fastest & Best)
// Formula: sum=n(n+1)/2
const sum = function(num) {
    return num*(num+1)/2;
}
console.log(sum(5));

const sumRecursion = function sum(n) {
    if (n === 1) return 1;
    return n + sum(n - 1);
}
console.log(sumRecursion(5));