"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var magician_names = ["Agha Feroz", "Babu Baral", "Munawar Zarif", "Irfan Malik"];
function show_magicians(magician_names) {
    magician_names.forEach(function (name) {
        console.log(name);
    });
}
function make_great(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        magician_names[i] += " the great";
    }
    return magician_names;
}
var greatMagician = make_great(__spreadArray([], magician_names, true));
show_magicians(magician_names);
// make_great(greatMagician)
show_magicians(greatMagician);
