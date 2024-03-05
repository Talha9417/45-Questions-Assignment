"use strict";
/**Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`The size of the shirt is "${size}" and the message print on it is "${message}".`);
}
;
// shirt with default size and message
make_shirt();
//  shirt with "Medium" size and  default message
make_shirt("Medium");
// shirt with "small" size and  different message
make_shirt("Small", "I like this shirt");
