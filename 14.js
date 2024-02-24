// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ['Mubashir', 'Ali', 'Adnan'];
guestList.forEach(function (guest) {
    console.log("\nDear ".concat(guest, ", I'm organizing a dinner gathering and would be honored if you could grace us with your presence. Your company would make the evening special.\""));
});
