"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case functio
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
var nameA = "Mubashir";
var nameB = "Ali";
var numA = 20;
var numB = 12;
var arr = ["Mubashir", "Ali", "Adnan"];
console.log("\n Testing for equality with strings. nameA is equal to nameB? I predict False");
console.log(nameA == nameB);
console.log("\n Testing for inequality with strings. nameA is not equal to nameB? I predict True");
console.log(nameA !== nameB);
console.log("\n Testing using the lower case function. nameA in lowercase == mubashir? I predict true");
console.log(nameA.toLowerCase() == "mubashir");
console.log("\n ".concat(numA, " is equal to ").concat(numB, "? I predict False"));
console.log(numA == numB);
console.log("\n ".concat(numA, " is grater than ").concat(numB, "? I predict True"));
console.log(numA == numB);
console.log("\n ".concat(numA, " is less than ").concat(numB, "? I predict False"));
console.log(numA == numB);
console.log("\n ".concat(numA, " is grather than or equal  to ").concat(numB, "? I predict True"));
console.log(numA >= numB);
console.log("\n ".concat(numA, " is less than or equal to 20? I predict True"));
console.log(numA <= 20);
console.log("\nIs ".concat(numA, " is equal to ").concat(numA, " and ").concat(numB, " is qual to ").concat(numA, "? I predict False"));
console.log(numA == numA && numB == numA);
console.log("\nIs ".concat(numA, " is equal to ").concat(numA, " or  ").concat(numB, " is qual to ").concat(numA, "? I predict True"));
console.log(numA == numA || numB == numA);
console.log('\n Is Mubashir is in a array? I predict true');
console.log(arr.includes("Mubashir"));
console.log('\n Is Khan  is in a array? I predict false');
console.log(arr.includes("Khan"));
