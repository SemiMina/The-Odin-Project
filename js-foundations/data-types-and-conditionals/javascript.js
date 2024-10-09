/*-----------Strings----------*/
const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const str_2 = str;

console.log(str);

// Quotes nd backticks
const single = "Single quotes";
const double = "Double quotes";
const backtick = `Backticks
    for multiple lines`;

console.log(single);
console.log(double);
console.log(backtick);

// Embed JS with backticks
const quotesType = "backticks";
const advice = `For multiple lines use ${quotesType}`;

console.log(advice);

// Concatenation
const greeting = "Hello";
const myName = "Marina";

console.log(greeting + ", " + myName);
console.log(`${greeting}, ${myName}`);

// Expressions in strings
const score = 9;
const maxScore = 10;
const output = `I'm ${
    score / maxScore * 100
}% done.`;

console.log(output);

// Comments
/*
multiple lines 
comment
*/

// Quotes in strings
// other type of quotes
const str_3 = "Lorem ipsum dolor `sit` amet 'consectetur' adipisicing elit.";
console.log(str_3);

// or escape symbol
const str_4 = `Lorem ipsum dolor sit amet 
\`consectetur\` adipisicing elit.`;
console.log(str_3);

// Convert to a string
const num = 35;
const str_5 = String(num);

console.log(typeof str_5);

/*----------Data types----------*/
// boolean
let isChecked = true;
isChecked = false;

console.log(isChecked);
console.log(typeof isChecked);

// null
let age = null; // unknown

console.log(age); // null
console.log(typeof age); // object

// undefined
let user; // value is not assigned

console.log(user); // undefined
console.log(typeof user); // undefined

// typeof
console.log(typeof String); // function
// console.log(typeof typeof); // error bacause it is operator
console.log(typeof null); // object
console.log(typeof console); // object
console.log(typeof console.log); // function

/*----------String Methods----------*/
let str_1 = "Lorem";

console.log(str_1.at(0)); // L, the first character is in position 0

console.log(str_1.at(-2)); // e

console.log(str_1.length); // 5
