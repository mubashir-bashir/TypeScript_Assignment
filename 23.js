"use strict";
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
Object.defineProperty(exports, "__esModule", { value: true });
var Car = "Ferrari";
var number = 24;
console.log("Is Car == Ferrari? I predict True");
console.log(Car == "Ferrari");
console.log('\n Is Car == Civic? I predict False');
console.log(Car == "Civic");
console.log("\n Is Car == ferrari? I predict False");
console.log(Car == "ferrari");
console.log("\n Is Car != Toyota I predict True");
console.log(Car !== "Toyota");
console.log("\n Car === Ferrari? I predict True");
console.log(Car === "Ferrari");
console.log("\n Car in Uppercase == FERRARI? I predict True");
console.log(Car.toUpperCase() == "FERRARI");
console.log("\n Length of Car == 9? I predict False");
console.log(Car.length === 9);
console.log("\n The name of Car is start with f ? I predict False");
console.log(Car.startsWith("f"));
console.log("\n Name of Car endswith i ? I predict true");
console.log(Car.endsWith('i'));
console.log("\n Name of Car is AMG after replacewith AMG? I predict true");
console.log(Car.replace("Ferrari", "AMG") == "AMG");
console.log("\n Name of car in lowercase == Ferrari? I predict False");
console.log(Car.toLowerCase() == "Ferrari");
