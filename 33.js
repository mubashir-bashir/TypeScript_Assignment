




var numbes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbes.forEach(function (num) {
    var ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num).concat(ordinalEnding));
});
