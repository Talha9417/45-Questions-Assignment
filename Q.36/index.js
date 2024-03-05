"use strict";
/**T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
function make_shirt(size, message) {
    console.log(`The size of the shirt is "${size}" and the message print on it is "${message}".`);
}
;
//direct call
make_shirt("Small", "I love this shirt!");
//with variables
let size = "Medium";
let message = "I  like t-shirts!";
make_shirt(size, message);
