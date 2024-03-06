"use strict";
//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = [
    "Harry Porter",
    "Hermione Granger",
    "Ron Weasley",
    "David Copperfield",
];
function show_magicians(magicians) {
    console.log("Here is the list of Magicians:\n");
    for (const magic of magicians) {
        console.log(magic);
    }
}
;
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        const greet = magicians[i];
        console.log(`${greet} the Great`);
    }
}
show_magicians(magicians);
console.log(`Magician's name wit "the great" message\n`);
make_great(magicians);
