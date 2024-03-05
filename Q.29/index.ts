/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

let fruits:string[]=[
    "apple",
    "banana",
    "orange",
    "mango",
    "grape",
];
let favorite_fruits:string[] = [
    "orange",
    "mango",
    "grape",
];
if (favorite_fruits.includes("orange")) {
    console.log('You really like Oranges!')
};
if (favorite_fruits.includes("mango")) {
    console.log('You really like Mangos!')
};
if (favorite_fruits.includes("grape")) {
    console.log('You really like Grapes!')
};
// the fruits that not present in array
if (favorite_fruits.includes("apple")) {
    console.log('You really like Apples!')
};
if (favorite_fruits.includes("banana")) {
    console.log('You really like Bananas!')
};

