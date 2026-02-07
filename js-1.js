

// let a=10;
// var b=20;
// function check() {
//     var a=20;
//     console.log(a);
// }

// check();
// console.log(a);
// var i=10;
// for(var i=1; i<=5; i++) {
//     console.log(i);
//     i++;
// }

// var a=2, b=3, c=4;
// a=b=c;
// console.log(a);
// console.log(b);
// console.log(c);


// Closure
// When a function comes under another function a "closure" is created.
// Closure pattern remembers outer variable & also helps to access scope members
// When you use closure, you are making private members globally available
// Closure is useful when you want to make few private members available globally when needed.

// function outer() {
//     return ()=> {
//         console.log("Inner called...");
//     }
// }

// const cl = outer();

// cl();

// const addCounter = () => {
//     let counter =0;
//     return ()=>{
//         counter++;
//         return counter;
//     }
    
// }

// const cl= addCounter();

// console.log(cl());
// console.log(cl());
// console.log(cl());

// Laxical environment
// Where somthing sits physically in the code you write
// Lexical means "having to do with words or grammer". 
// A lexical environment exists in programming languages in which
// where you write someting is important.

// const a = 1;              // Global env
// function outer() {        // Lexical env of outer
//   const b = 2;
//   function inner() {      // Lexical env of inner
//     const c = 3;
//     console.log(a, b, c); // 1, 2, 3  <-- found via scope chain
//   }
//   inner();
// }
// outer();

// How can sum(5)(6) return 11?
// const sum = function(a){
//     return function(b) {
//         return a+b;
//     }
// }

// const cl = sum(5);
// const ans = cl(6);
// console.log(ans);
// const sum = a=>b=>a+b;
// const ans = sum(5)(6);
// console.log(ans);


// Slice
// Slice is an array method, We can extract part of any array, 
// but without changing the original array.
// Indexing - 0-based
// End index - Not included
// Mutates original? - No

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2)); //c,d,e
console.log(arr.slice(2, 4)); //c, d
console.log(arr.slice(-2)); //d, e
console.log(arr.slice(-1)); //c
console.log(arr.slice(1, -2)); //b c
console.log([...arr]) //Shallow copy



// Splice
// splice() starts indexing at 0
// it modifies the original array
// returns the removed elements
let arr2 = [1,2,3,4,5,6];
// let splicedArray = arr2.splice(2);
// console.log(splicedArray);
// console.log(arr2);
// console.log(arr2.splice(-1)); // 6
// console.log(arr2.splice(1, 2)); // 3 4
// console.log(arr2.splice(2, 4)); // 3 4 5 6 

// start index, delete count then inserted element
// console.log(arr2.splice(2, 0, 10, 20));
// console.log(arr2);

// replace 2,3
console.log(arr2.splice(1, 3, 20, 10) );
console.log(arr2);

