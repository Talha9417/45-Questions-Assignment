"use strict";
//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Array of magician names
const magicians = [
    "Harry Porter",
    "Hermione Granger",
    "Ron Weasley",
    "David Copperfield"
];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(` ${magician}`);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `${magician} the Great`);
    return greatMagicians;
}
;
//modify the array
const greatMagiciansNames = make_great(magicians);
//origional
console.log("Here is the list of magicians before making them great:");
show_magicians(magicians);
//modified
console.log("\nHere is the list of magicians after making them great:");
show_magicians(greatMagiciansNames);
