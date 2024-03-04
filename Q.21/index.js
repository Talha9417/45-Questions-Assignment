"use strict";
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let bike = {
    company: "Yamaha",
    name: "YBR 125",
    price: 466000,
    description: "This is a great bike. It has a comfortable seat and easy to handle gears.There are Five gears in it."
};
// define an array of objects
let bikes = [];
bikes.push(bike); // add a new object to the array
bikes.push({
    company: "Honda",
    name: "CD 125",
    price: 234900,
    description: "This is a great bike. It has a comfortable seat and easy to handle gears.There are Four gears in it."
}); //add another object to the array
let bike3 = {
    company: "BMW",
    name: "F 700 GS",
    price: 8188000,
    description: "This is a great  sports bike. It has a comfortable seat and easy to handle gears.There are Six gears in it."
};
bikes.push(bike3);
function Bikes(bikes) {
    for (let i of bikes) {
        console.log(`
    Company: ${i.company}
    Name: ${i.name}
    Price: ${i.price}
    Description: ${i.description}
    ________________\n
    `);
    }
}
Bikes(bikes);
