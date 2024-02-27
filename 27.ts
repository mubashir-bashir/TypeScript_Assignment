// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.



// Version 1

let alienColor = "green"
if(alienColor=="green"){
    console.log("Congratulation you just earned 5 points for shooting the alien")
}
else if(alienColor=="yellow"){
    console.log("Congratulation You just earned 10 points ")
}
else if (alienColor=="red"){
    console.log("Congratulation You just earned 15 points ")
}
// version 2 

let alien_color = "yellow"
if(alien_color=="green"){
    console.log("Congratulation you just earned 5 points for shooting the alien")
}
else if(alien_color=="yellow"){
    console.log("Congratulation You just earned 10 points ")
}
else if (alien_color=="red"){
    console.log("Congratulation You just earned 15 points ")
}

// version 3

let AlienColor = "red"
if(AlienColor=="green"){
    console.log("Congratulation you just earned 5 points for shooting the alien")
}
else if(AlienColor=="yellow"){
    console.log("Congratulation You just earned 10 points ")
}
else if (AlienColor=="red"){
    console.log("Congratulation You just earned 15 points ")
}



export {}