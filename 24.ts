// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case functio
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let nameA = "Mubashir"
let nameB= "Ali"
let numA = 20;
let numB=12;
let arr = ["Mubashir", "Ali", "Adnan"]

console.log("\n Testing for equality with strings. nameA is equal to nameB? I predict False")
console.log(nameA == nameB)

console.log("\n Testing for inequality with strings. nameA is not equal to nameB? I predict True")
console.log(nameA !== nameB)

console.log("\n Testing using the lower case function. nameA in lowercase == mubashir? I predict true")
console.log(nameA.toLowerCase()=="mubashir")


console.log(`\nNumerical tests involving equality. Is ${numA} is equal to ${numB}? I predict False`)
console.log(numA==numB)

console.log(`\nNumerical tests involving inequality. Is numA which is ${numA} is not equal to numB ${numB}? I predict True`)
console.log(numA!==numB)


console.log(`\n ${numA} is grater than ${numB}? I predict True`)
console.log(numA==numB)
console.log(`\n ${numA} is less than ${numB}? I predict False`)
console.log(numA==numB)

console.log(`\n ${numA} is grather than or equal  to ${numB}? I predict True`)
console.log(numA>=numB)

console.log(`\n ${numA} is less than or equal to 20? I predict True`)
console.log(numA<= 20)

console.log(`\nIs ${numA} is equal to ${numA} and ${numB} is qual to ${numA}? I predict False`)
console.log(numA==numA && numB==numA)

console.log(`\nIs ${numA} is equal to ${numA} or  ${numB} is qual to ${numA}? I predict True`)
console.log(numA==numA || numB==numA)


console.log('\n Is Mubashir is in a array? I predict true')
console.log(arr.includes("Mubashir"))

console.log('\n Is Khan  is in a array? I predict false')
console.log(arr.includes("Khan"))





export {}