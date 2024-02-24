// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

export{}

let guestList= ['Mubashir', 'Ali','Adnan']
guestList.unshift("Khan Baba")
guestList.push("Sara")
let middle=Math.floor(guestList.length /2)
guestList.splice(middle,0,"Mota Bhai")

guestList.forEach((guest)=>{
    console.log(`Dear ${guest}, I'm organizing a dinner gathering and would be honored if you could grace us with your presence. Your company would make the evening special."`)
})

while(guestList.length>2){
    guestList.pop()
}

console.log("\nUnfortunately, the new dinner table won't arrive on time; we can only accommodate two guests. Our apologies for any inconvenience. Below are the 2 people who are invited\n")

guestList.forEach((guest)=>{
    console.log(`Dear ${guest},  We'd like to confirm that you are still warmly invited to dinner despite recent updates`)
})
