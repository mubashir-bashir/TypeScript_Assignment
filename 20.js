// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var pakistaniRivers = ['Indus', 'Jhelum', 'Chenab', 'Ravi', 'Sutlej', 'Beas'];
function list(name) {
    console.log("List of Pakistani Mountains are:");
    name.forEach(function (name) {
        console.log(name);
    });
}
list(pakistaniRivers);
