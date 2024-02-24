"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ['Mubashir', 'Ali', 'Adnan'];
guestList.forEach(function (guest) {
    console.log("\nDear ".concat(guest, ", I'm organizing a dinner gathering and would be honored if you could grace us with your presence. Your company would make the evening special.\""));
});
console.log("\nHello friends, just a heads up that ".concat(guestList[guestList.indexOf("Adnan")], "  won't be able to make it to dinner."));
// modifying the list 
guestList[guestList.indexOf("Adnan")] = "Afnan";
console.log("\n Presented below is the new guest list for our event.\n");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I'm organizing a dinner gathering and would be honored if you could grace us with your presence. Your company would make the evening special.\""));
});
console.log("\nExciting news! We've secured a bigger dinner table and would love to include some more guest in our list below is the extended list of guest who's invited\n");
// Adding the guest in start of the list 
guestList.unshift("Khan Baba");
// Adding the guest in the end of the list
guestList.push("Sara");
// Adding the list in the middle of the list 
var middle = Math.floor(guestList.length / 2);
guestList.splice(middle, 0, "Mota Bhai");
var inivtedGuest = guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I'm organizing a dinner gathering and would be honored if you could grace us with your presence. Your company would make the evening special.\""));
});
// inivtedGuest
