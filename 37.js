"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The T-shirt is size ".concat(size, " and it has the message: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I also love JavaScript");
