"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
var username = ["Mubashir", "Ali", "Adnan", "Admin", "Afnan", "Kamran"];
if (username.length > 0) {
    for (var i_1 = 0; i_1 < username.length; i_1++) {
        if (username[i_1] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(username[i_1]);
        }
    }
}
else {
    console.log("we need to find some users");
}
var i = 0;
while (i < username.length) {
    username.pop();
}
if (username.length > 0) {
    for (var i_2 = 0; i_2 < username.length; i_2++) {
        if (username[i_2] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(username[i_2]);
        }
    }
}
else {
    console.log("we need to find some users");
}
console.log(username);
