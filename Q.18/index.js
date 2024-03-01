"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let favoriteplaces = ["Makkah Mukarmah", "Madina Munawarah", "Islamabad", "Murree", "Peshawar",
];
//Print your array in its original order.
console.log("\nOriginal Order");
console.log(favoriteplaces);
//Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order without modifying the actual list");
console.log([...favoriteplaces].sort());
//Show that your array is still in its original order by printing it.
console.log("\nShowing  array is still in its original order by print");
console.log(favoriteplaces);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReversed Alphabetic Order");
console.log([...favoriteplaces].sort().reverse());
//Show that your array is still in its original order by printing it again
console.log("\nShowing  array is still in its original order by print");
console.log(favoriteplaces);
//Reverse the order of your list. Print the array to show that its order has changed
console.log("\nAfter reversing the order");
favoriteplaces.reverse();
console.log(favoriteplaces);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original Order");
favoriteplaces.reverse();
console.log(favoriteplaces);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabetical order.");
favoriteplaces.sort();
console.log(favoriteplaces);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabetical Order.");
favoriteplaces.reverse();
console.log(favoriteplaces);
