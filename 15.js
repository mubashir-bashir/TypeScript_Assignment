"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ['Mubashir', 'Ali', 'Adnan'];
guestList.forEach(function (guest) {
    console.log("\nDear ".concat(guest, ", I'm organizing a dinner gathering and would be honored if you could grace us with your presence. Your company would make the evening special.\""));
});
console.log("\nHello friends, just a heads up that ".concat(guestList[guestList.indexOf("Adnan")], "  won't be able to make it to dinner."));
// modifying the list 
guestList[guestList.indexOf("Adnan")] = "Afnan";
console.log("\n Presented below is the new guest list for our event.");
guestList.forEach(function (guest) {
    console.log("\nDear ".concat(guest, ", I'm organizing a dinner gathering and would be honored if you could grace us with your presence. Your company would make the evening special.\""));
});
