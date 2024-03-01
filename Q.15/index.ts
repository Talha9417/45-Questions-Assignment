/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestlist: string[] = [
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
  console.log(
    `Dear ${guestname}! We have a dinner plan today please come and join us on dinner.`)
    });

