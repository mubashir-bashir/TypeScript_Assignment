// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” 
var favTransportation = ['Rolls-Royce Phantom', 'Audi A8', 'Range Rover', 'Bugatti Chiron', 'Boing 747', 'Kawasaki Ninja', 'BMW'];
favTransportation.forEach(function (name) {
    console.log("Inshall one day i will buy ".concat(name));
});
