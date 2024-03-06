"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
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
show_magicians(magicians);
