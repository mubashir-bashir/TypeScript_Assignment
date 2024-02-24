"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
function titleCase(name) {
    var TCname = name.toLowerCase().split(" ");
    for (var i = 0; i < TCname.length; i++) {
        TCname[i] = TCname[i].charAt(0).toUpperCase() + TCname[i].slice(1);
    }
    console.log(TCname.join(" "));
}
var name = "Mubashir Bashir";
console.log("Name in lower Case");
console.log(name.toLowerCase());
console.log("\nName in Upper Case");
console.log(name.toUpperCase());
console.log("\nName in Title Case");
titleCase(name);
