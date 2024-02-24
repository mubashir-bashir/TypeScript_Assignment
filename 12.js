"use strict";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
Object.defineProperty(exports, "__esModule", { value: true });
var Names = ["Mubashir", "Ali", "Adnan", "Afnan", "Zaryab"];
Names.forEach(function (name) {
    console.log("Hello, ".concat(name, "! Wishing you a fantastic day ahead"));
});
