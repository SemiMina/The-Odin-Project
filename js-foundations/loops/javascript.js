const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
     console.log(cat);
}

// map()
const upperCats = cats.map((cat) =>
    cat.toUpperCase()
);

console.log(upperCats);

// filter()
const filteredCats = cats.filter((cat) =>
    cat.startsWith("L")
);

console.log(filteredCats);

// if we need to know when we are on the final loop iteration
// use for i
let catsList = 'Big cats: ';

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
      // We are at the end of the array
      catsList += `${cats[i]}.`;
    } else {
        catsList += `${cats[i]}, `;
    }
  }

console.log(catsList);

// break statement will immediately exit the loop
let firstLCat;

for (let i = 0; i < cats.length; i++) {
    if (cats[i].startsWith("L")) {
        firstLCat = cats[i];
        break;
    }
  }

console.log(firstLCat);

// continue skips to the next iteration
const notLCats = [];

for (let i = 0; i < cats.length; i++) {
    if (cats[i].startsWith("L")) {
        continue;
    } else {
        notLCats.push(cats[i]);
    }
  }

console.log(notLCats);

// while loop
let i = 0;
catsList = 'Big cats: ';

while (i < cats.length) {
    if (i === cats.length - 1) {
        // We are at the end of the array
        catsList += `${cats[i]}.`;
      } else {
          catsList += `${cats[i]}, `;
      } 

    i++;
}

console.log(catsList);

// do while loop
// is always executed at least once
i = 0;
catsList = 'Big cats: ';

do {
    if (i === cats.length - 1) {
        // We are at the end of the array
        catsList += `${cats[i]}.`;
      } else {
          catsList += `${cats[i]}, `;
      } 

    i++;
} while (i < cats.length);

console.log(catsList);
