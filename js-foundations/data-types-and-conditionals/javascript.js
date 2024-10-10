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

/*----------Comparisons----------*/
let res = 'A' < 'B'; // true

console.log(res);

res = 'A' < 'a'; 

console.log(res); // true, Unicode

res = '2' > 1; 

console.log(res); // true

res = '2' > '12'; 

console.log(res); // true

res = '001' == 1; 

console.log(res); // true

console.log(Boolean("0")); // true

console.log(Boolean(0)); // false

// == converts to numbers
console.log(0 == false); // true

console.log('' == false); // true

console.log('' == 0); // true

// strict equality - without type conversion
console.log(0 === false); // false

console.log('' === false); // false

console.log('' === 0); // false

// comparison with null and undefined
console.log(null == undefined); //true, they equal each other and don’t equal anything else

console.log(null === undefined); // false

// other comparisons convert null and undefined to numbers
console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN

console.log(null > undefined); // false

console.log(null > 0); // false

console.log(null == 0); // false

console.log(null >= 0); // true, 0 >= 0

// undefined is incomparable
console.log(undefined > 0); // false, NaN > 0

console.log(undefined == 0); // false

console.log(undefined >= 0); // false

console.log(undefined === 0); // false
// NaN returns false for all comparisons

/*----------Conditionals----------*/
// else if
let currentTime = 21;
let greetingText;

if (currentTime < 10) {
    greetingText = "Good morning";
} else if (currentTime < 20) {
    greetingText = "Good day";
} else {
    greetingText = "Good evening";
}

console.log(greetingText);

// random link
let text;
if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}

console.log(text);