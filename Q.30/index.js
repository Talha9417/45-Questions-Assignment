"use strict";
/**Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
let username = [
    "Tahir",
    "Talha",
    "Admin",
    "Eric",
    "Ali",
];
//with forEach loop.
console.log("With forEach loop");
username.forEach((username) => {
    if (username.includes("Admin")) {
        console.log(`Hello ${username}! You are logged in.would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}! Thank you for logging in again.`);
    }
});
//for in loop
username = [
    "Tahir",
    "Talha",
    "Admin",
    "Eric",
    "Ali",
];
console.log("\nWith For in loop");
function greeting() {
    for (let i in username) {
        if (username[i].toLowerCase() === "admin") {
            console.log(`Hello ${username[i]}! You are logged in. Would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${username[i]}! Thank you for logging in again.`);
        }
    }
}
greeting();
