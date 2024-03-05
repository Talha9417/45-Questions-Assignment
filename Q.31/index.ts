/**No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!o
• Remove all of the usernames from your array, and make sure the correct message is printed. */
let usernames:string[]=[
    "Tahir",
    "Talha",
    "Admin",
    "Eric",
    "Ali",
];
//in function
function greet() {
    if (usernames.length===0) {
        console.log("We need to find some users!");
}
for (let username of usernames) {
       if (username.toLowerCase() === "admin"){
           console.log(`Hello ${username}! You are logged in. Would you like to see a status report?`);
       }else {
           console.log(`Hello ${username}! Thank you for logging in again.`);
         }
       }
    };
console.log("\nFor non empty username");
greet();
//for empty array
usernames= [];

console.log("\nFor empty username");
greet();
