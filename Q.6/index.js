"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("with WhiteSpace Characters:");
let myname = "       \tMuhammad Talha Tariq\n      ";
console.log(myname);
// Trimming the white spaces from both ends of a string using trim() method in JavaScript
let trimmedName = myname.trim();
console.log(`Trimmed Name: ${trimmedName}`);
