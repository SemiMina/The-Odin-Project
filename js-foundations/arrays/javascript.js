// not a constant array! a constant referense to an array
const skooters = [
    "Honda", 
    "Suzuki", 
    "Yamaha", 
    "SYM", 
    "Vespa", 
    "Aprilia"
];

let skooter = skooters[0];

let skooters_string = skooters.toString();
// "Honda,Suzuki,Yamaha,SYM,Vespa,Aprilia"
// an elements in an array can have different types
skooters[6] = 10;

let len = skooters.length;

console.log(len);

skooters.sort(); 
// (7) [10, 'Aprilia', 'Honda', 'SYM', 'Suzuki', 'Vespa', 'Yamaha']

// to loop through an array
let text = "";
for (let i = 0; i < len; i++) {
    text += skooters[i];
    if (i != len - 1) {
        text += ", ";
    }
}

console.log(text);

// or use forEach() function
text = "";

function addElementToString(element) {
    text += element;
    text += " ";
}

skooters.forEach(addElementToString);

console.log(text);

// Adding array elements
skooters.push("BMW");

// or using length method
skooters[skooters.length] = "BMW";

// how define an object is an array
let is_arr = Array.isArray(skooters); // true

// join all elements into a string
// with a separator
skooters_string = skooters.join(", ");

// removing elements
// to remove the last element
let popped_element = skooters.pop(); // return the popped out element

// push method retern the new array length
let new_length = skooters.push("Skoot"); 

// remove the first element
let shifted_element = skooters.shift();

// add at the beginning
// at the first element place!
new_length = skooters.unshift("Skoot"); 

// Merging arrays (concatenating end-to-end)
const myCats = ['Kuzya', 'Shoti'];
const myDogs = ['Ichi'];

const myPets = myCats.concat(myDogs);
// (3) ['Kuzya', 'Shoti', 'Ichi']

// concat method create a new array and can take many arguments
// arrays as arguments
// arr4 =  arr1.concat(arr2, arr3);
// or strings as arguments
// const myPets = myCats.concat('Ichi');

debugger;
// copy elements to another position in an array
// it replaces elements
const original_fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruits = original_fruits; // ! creates a connection between them!
let new_fruits = fruits.copyWithin(2, 0);
//(4) ['Banana', 'Orange', 'Banana', 'Orange']

// flattering into a one-dimensional array
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); //(6) [1, 2, 3, 4, 5, 6]

// splice() adds new elements and alters the original array
fruits = original_fruits;

fruits.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// how to create a copy of an array
const original_list_of_fruits = ["Banana", "Orange", "Apple", "Mango"];
let list_of_fruits = original_list_of_fruits.slice(); // 

// toSplice() keeps the original array unchanged and creates a new array
let new_list = list_of_fruits.toSpliced(2, 0, "Lemon", "Kiwi");

// slice() method slices out a piece of an array into a new array
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
// starting from i slice(i)
// starting from i up to j not including slice(i, j)
const arrOfNum = [0, 1, 2, 3, 4, 5];
const arrFrom0 = arrOfNum.slice();
const arrFrom3 = arrOfNum.slice(3);
const arrFrom2UpTo4 = arrOfNum.slice(2, 5);
