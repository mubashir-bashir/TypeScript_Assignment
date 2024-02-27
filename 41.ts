// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician_names = ["Agha Feroz","Babu Baral","Munawar Zarif","Irfan Malik"]

function show_magicians(magician_names){
    magician_names.forEach((name)=>{
        console.log(name)
    })
}


show_magicians(magician_names)