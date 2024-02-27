// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magician_names = ["Agha Feroz","Babu Baral","Munawar Zarif","Irfan Malik"]

function show_magicians(magician_names){
    magician_names.forEach((name)=>{
        console.log(name)
    })
}

function make_great(magician_names){
    for(let i=0;i<magician_names.length;i++){
        magician_names[i] +=" the great"
    }
}

show_magicians(magician_names)

make_great(magician_names)
show_magicians(magician_names)
export {}