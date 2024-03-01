"use strict";
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//this is exercise 15......
let guestlist = [
    "Azfar",
    "Ali",
    "Haider",
    "Husnain",
    "Ateeb",
    "Waheed",
];
// guestlist.forEach((guestname) => {
//   console.log(
//     `Dear ${guestname}! We have a dinner plan today please come and join us on dinner.`
//   );
// });
//step 1: print the name who cant take it.
let removedguest = guestlist.pop();
console.log(`${removedguest} can't make it to the dinner.`);
//step 2: replace it with another.
let newGuest = "Tahir";
guestlist.push(newGuest);
/*Now we need to print the invitations again for all the guests including the new guest.
So let's use the previous loop again.*/
guestlist.forEach((guestname) => {
    console.log(`Dear ${guestname}! We have a dinner plan today please come and join us on dinner.`);
});
//printing message that indicate number of guests.
console.log(`\nPrinting message indicating number of guests.`);
console.log(`I have finally invited  ${guestlist.length} people to dinner.`);
