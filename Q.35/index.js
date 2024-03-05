"use strict";
/**Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
//making array of animals
let animals = ["Dog", "Cat", "Goat"];
console.log("\n\tList of Animals:");
//print array
for (const animal of animals) {
    console.log(animal);
}
;
//modifying program by printing statement for each animal.
console.log("\n\tStatement for each animal:");
for (const animal of animals) {
    if (animal == "Dog") {
        console.log(`A ${animal} would make a great pet.`);
    }
    else if (animal == "Cat") {
        console.log(`I love having a ${animal}.`);
    }
    else if (animal == "Goat") {
        console.log(`I love having a ${animal}.`);
    }
}
console.log(`Any of these animals would make a great pet!`);
