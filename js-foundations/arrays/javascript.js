debugger;

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


