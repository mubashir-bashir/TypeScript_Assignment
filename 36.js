// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The size of shirt is ".concat(size, " and message is \"").concat(message, "\""));
}
make_shirt(32, "It's not a bug its a feature");
