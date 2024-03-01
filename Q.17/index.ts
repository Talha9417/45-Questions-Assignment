/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guestlist: string[] = [
  "Muhammad",
  "Azfar",
  "Ali",
  "Haider",
  "Ahsan",
  "Husnain",
  "Ateeb",
  "Tahir",
  "Sajid",
];
//message
console.log(
  `I can invite only two guests for dinner from my Friends ${guestlist}`
);
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let a = guestlist.pop();
console.log(`Sorry,${a} i can't invite you to dinner.`);
let b = guestlist.pop();
console.log(`Sorry,${b} i can't invite you to dinner.`);
let c = guestlist.pop();
console.log(`Sorry,${c} i can't invite you to dinner.`);
let d = guestlist.pop();
console.log(`Sorry,${d} i can't invite you to dinner.`);
let e = guestlist.pop();
console.log(`Sorry,${e} i can't invite you to dinner.`);
let f = guestlist.pop();
console.log(`Sorry,${f} i can't invite you to dinner.`);
let g = guestlist.pop();
console.log(`Sorry,${g} i can't invite you to dinner.`);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`${guestlist} are still invited to dinner.`);
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let h = guestlist.pop();
console.log(guestlist);
let i = guestlist.pop();
console.log(guestlist);
