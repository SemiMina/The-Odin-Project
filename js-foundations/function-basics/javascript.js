// Function Declaration
favoriteAnimal();

function favoriteAnimal() {
    return 'Dog';
}

console.log( 'My favorite animal is ' + favoriteAnimal() );

// Local variable
function favoriteAnimalLocal() {
    let animalName = 'Bird';

    return animalName;
}

console.log( 'My favorite animal is ' + favoriteAnimalLocal() );

// console.log( animalName );// not defined, local variable

// Global variable
let favoriteAnimalName = 'Cat';

function favoriteAnimalGlobal() {
    return favoriteAnimalName;
}

// function has access to the global variable and can use it
console.log( 'My favorite animal is ' + favoriteAnimalGlobal() );

console.log( favoriteAnimalName ); // Cat

// function can modify the global variable
console.log( favoriteAnimalName ); // Cat

function getFavoriteAnimal() {
    favoriteAnimalName = 'Fish';

    return favoriteAnimalName;
}

console.log( 'My favorite animal is ' + getFavoriteAnimal() ); // Fish

console.log( favoriteAnimalName ); // Fish

// but it only use global variable if there is no local one
// if a same-named variable is declared inside the function 
// then it shadows the global one 
function getFavoriteAnimalName() {
    let favoriteAnimalName = 'Dog';

    return favoriteAnimalName;
}

console.log( 'My favorite animal is ' + getFavoriteAnimalName() ); // Dog

console.log( favoriteAnimalName ); // Fish, unchanged

// Parameters
function isFavoriteAnimal(animal) {
    return (animal === favoriteAnimalName) ? true : false
}

function showMessage(animal, text) {
    let message = animal + ': ' + text + ' - ' ;
    // debugger;
    if (isFavoriteAnimal(animal)) {
        message += 'Yes.'
    } else {
        message += 'No.'
    }

    console.log( message );
}

showMessage( 'Dog', 'Am I your favorite?' ); // No
showMessage( 'Cat', 'Am I your favorite?' ); // No
showMessage( 'Fish', 'Am I your favorite?' ); // Yes

// Default parameters
// if an argument is not provided, the value become undefined
showMessage( 'Fish' ); // Fish: undefined - Yes.

// but we can specify the default value
let defaultText = 'Am I your favorite?' ;

function showMessageDefault(animal, text = defaultText) {
    let message = animal + ': ' + text + ' - ' ;
    // debugger;
    if (isFavoriteAnimal(animal)) {
        message += 'Yes.'
    } else {
        message += 'No.'
    }

    console.log( message );
}

showMessageDefault( 'Fish' ); // Fish: Am I your favorite? - Yes.

// or we can compare it to undefined
// if (text === undefined) {}
// text = text || 'empty'; // returns the last one if no truthy value is found
// count ?? "unknown"; // if we need 0, returns the first defined value

// return
// with an empty return or without it returns undefined
function doNothing() {
    return
}

console.log( doNothing() === undefined ); // true

// function expressions
// create a new function in the middle of any expression
let sayHi = function() {
    console.log( "Hi!" );
}; // with ;

// function is a value
console.log( sayHi ); // function code
// ƒ () {
//     return console.log( "Hi!" );
// }

console.log( typeof sayHi ); // function

sayHi(); // Hi! // with parentheses runs the function

// arrow functions
let product = (num1, num2) => num1 * num2;

console.log( product(7, 8) );

let sayHello = () => console.log( 'Hello!' );

sayHello();

/*-----------test functions--------------*/
// 1
function add7(num) {
    return num + 7
}

console.log( add7(5) );

// 2
function multiply(num1, num2) {
    return num1 * num2
}

console.log( multiply(7, 8) );

//3 
function capitalize(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
}

console.log( capitalize('lowercase') );
console.log( capitalize('UPPERCASE') );
console.log( capitalize('BoTh') );

// 4
function lastLetter(str) {
    return str.substr(-1, 1)
}

console.log( lastLetter('lowercase') );
console.log( lastLetter('UPPERCASE') );
console.log( lastLetter('BoTh') );

/*-------------------------*/