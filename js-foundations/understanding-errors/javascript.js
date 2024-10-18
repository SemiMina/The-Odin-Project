// Referense error
// the variable does not exist or does not exist in the current scope
// or hasn't yet been initialized
// or has been spelled incorrectly

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization

const a = 5;
const b = 10;

// console.log(c); // Uncaught ReferenceError: c is not defined

// The stack trace

// function add() {
//   return c;
// }

// function print() {
//   add();
// }

// print();

// Uncaught ReferenceError: c is not defined
//     at add (javascript.js:9:3)
//     at print (javascript.js:13:3)
//     at javascript.js:16:1

// Syntax error
// the code is not written correctly
function add() {
    let c = a + b;
    return c;
  }

// console.log add(); // Uncaught SyntaxError: Unexpected identifier 'add' (at 

// Type error
// an operand or argument passed to a function is incompatible with the type expected by that operator or function;
// or when attempting to modify a value that cannot be changed;
// or when attempting to use a value in an inappropriate way.

a = 12;

console.log(a); //Uncaught TypeError: Assignment to constant variable.

console.log(add(a, b)); // it works 

console.log(a.substr(0)); //Uncaught TypeError: a.substr is not a function

// Catching errors
try {
    a = 12;
} catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message); // Assignment to constant variable.
    console.log(e.name); // TypeError
    console.log(e.stack); // Assignment to constant variable.
}