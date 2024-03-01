"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let guestlist = [
    "Azfar",
    "Ali",
    "Haider",
    "Husnain",
    "Ateeb",
    "Tahir",
];
guestlist.forEach((guestname) => {
    console.log(`Dear friend, ${guestname}! I found a bigger table for dinner So,more frineds can join  us.`);
});
console.log("    New Invitations   ");
//1.Adding a new Guest at the Beginning.
guestlist.unshift("Muhammad");
//2.Adding a new Guest at the end.
guestlist.push("Sajid");
//3.Adding a new Guest in the middle.
guestlist.splice(4, 0, "Ahsan");
//4. Message for invitation.
guestlist.forEach((guestname) => {
    console.log(`Dear ${guestname}! We have a dinner plan today please come and join us on dinner.`);
});
console.log(guestlist);
