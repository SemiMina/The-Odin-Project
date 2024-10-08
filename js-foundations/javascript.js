// Variables and Numbers

// Variables
const nm = "John";
const surname = "Doe";
let age = 11;

age = 54;
// TypeError: Assignment to constant variable.
// nm = "Joe"

console.log(nm, surname, age); // John Doe 54

// Numbers
let num = 3 + 2 - 76 * (1 + 1);
console.log(num);

num = 23 + 97;
console.log(num);

num = (4 + 6 + 9) / 77;
console.log(num);

console.log(4, 6, 9);

num = 10;
console.log(num);

num = num * 9;
console.log(num);

let max = 57;
let actual = max - 13;
let perc = actual / max;

console.log(perc);

perc = max;
console.log(perc);

// 
// function nameOf(variable) {
//     return Object.keys({variable})[0];
//   };

// let varName = nameOf(perc);

//   console.log(varName);
  
// Additional
// Constants in UPPER_CASE for colors
const  COLOR_CHILI_PEPPER = "#9b1b30";

let color = COLOR_CHILI_PEPPER;

console.log(color);

// Arithmetic Operations
max++;
console.log(max);

// Floating point precision problem
let sum = 0.2 + 0.1; // 0.30000000000000004

console.log(sum);

sum = (0.2 * 10 + 0.1 * 10) / 10; // 0.3

console.log(sum);

// Concatenation
let x = "10";
let y = "20";

console.log(x + y); // "1020"
console.log(x, y); // "10 20"

// add a string and a number
x = 10;
y = "20";

console.log(x + y); //"1020"

x = "10";
y = 20;

console.log(x + y); // "1020"

x = 10;
y = 20;

console.log("result = " + x + y); // "result = 1020"

x = 10;
y = 20;
let z = "30";

console.log(x + y + z);  //  "3030"

// Try to convert strings to numbers
x = "10";
y = "20";

console.log(x / y); // 0.5

console.log(x * y); // 200

console.log(x - y); //-10

console.log(100 / y); // 5

// NaN
x = 100 / "str";

console.log(x); // NaN

console.log(isNaN(x)); 

console.log(x * 10); // NaN

// type
console.log(typeof x); // number

// convert to number
x = "45";
console.log(typeof x); // string

x = Number(x);

console.log(typeof x); // numbers

// method to round
x = 1.567;

console.log(x.toFixed(2)); // 1.57

// increment and decrement
x = 1;
x++;

console.log(x);

console.log(x++); // 2

console.log(x); // 3

console.log(--x); // 2

console.log(x); //2

x += 2;  // x = x + 2;

console.log(x); // 4

// Comparison

console.log(x === 4);  //true

console.log(x !== 4);  // false

// Infinity
x /= 0;

console.log(x); // Infinity

console.log(typeof Infinity); // number


