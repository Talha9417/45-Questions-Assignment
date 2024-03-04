"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
let firstname = "Talha";
let lastname = "Tariq";
//Tests for equality and inequality with strings
console.log("Test for equality");
console.log(`${firstname}` === `${lastname}`);
console.log("Test for inequality");
console.log(`${firstname}` != `${lastname}`);
//Tests using the lower case function
console.log("\n\rTesting Lower Case Function");
console.log(firstname.toLowerCase() === 'talha');
console.log('tAlHa'.toLowerCase() === 'talha');
console.log(lastname.toLowerCase() === 'talha');
//tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n\rTests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(10 > 5);
console.log(1 >= 5);
console.log(5 < 10);
console.log(10 <= 1);
/*Tests using "and" and "or" operators
* The && operator returns true if both operands are true, otherwise it returns false.
* It does not evaluate the second argument if the first one is false.
* The || operator returns true if either of the two operands is true, otherwise it returns false.
* It does not evaluate the second argument if the first one is true. */
console.log('\n\rTesting AND & OR Operators');
//and operator =>&&
console.log(`${firstname}` == `${firstname}` && `${lastname}` == `${lastname}`); //returns true
console.log(`${firstname}` == `${lastname}` && `${lastname}` == `${lastname}`); //return false
//or operator =>||
console.log(`${firstname}` == `${firstname}` || `${lastname}` == `${lastname}`); //returns true
console.log(`${firstname}` == `${lastname}` || `${lastname}` == `${lastname}`); //returns true
/*Tests whether an item is in a array
 * The indexOf() method returns the position of the first occurrence
 * of a specified value within an array, or -1 if it is not found.
 * If the search element is not a  string, then the default will be used.*/
let fruits = ['apple', 'banana', 'mango'];
console.log('\n\rTesting Array Contains Item');
console.log(fruits.indexOf('banana')); //returns 1
if (fruits.includes('grape')) {
    console.log('The fruit grape is in the list');
}
else {
    console.log('The fruit grape is not in the list');
}
;
