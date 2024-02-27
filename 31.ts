// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


let username= ["Mubashir", "Ali", "Adnan", "Admin","Afnan","Kamran"]
if(username.length>0){
for(let i=0;i<username.length;i++){
    if(username[i]=="Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(username[i])
    }
}}
else{
    console.log("we need to find some users")
}

let i=0
while(i<username.length){
    username.pop()
}

console.log(username)

if(username.length>0){
for(let i=0;i<username.length;i++){
    if(username[i]=="Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(username[i])
    }
}}
else{
    console.log("we need to find some users")
}





export {}