/**Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

//version 1 =>green alien color
console.log("version 1 where alien colour is green");
let alien_color:string="green";
if(alien_color=="green"){
    console.log("You just earned 5 points.");
}else if(alien_color=="yellow"){
    console.log("You just earned 10 points.");
}else if(alien_color=="red"){
    console.log("You just earned 15 points.");
}else{
    console.log("Unknown alien color");
};

//version 2 =>yellow alien color

console.log("\nversion 2 where alien colour is yellow");
alien_color="yellow";
if(alien_color=="green"){
    console.log("You just earned 5 points.");
}else if(alien_color=="yellow"){
    console.log("You just earned 10 points.");
}else if(alien_color=="red"){
    console.log("You just earned 15 points.");
}else{
    console.log("Unknown alien color");
};

//version 3 =>red alien color

console.log("\nversion 3 where alien colour is red");
alien_color="red";
if(alien_color=="green"){
    console.log("You just earned 5 points.");
}else if(alien_color=="yellow"){
    console.log("You just earned 10 points.");
}else if(alien_color=="red"){
    console.log("You just earned 15 points.");
}else{
    console.log("Unknown alien color");
};