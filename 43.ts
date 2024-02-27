// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


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
    return magician_names
}
let greatMagician= make_great([...magician_names])

// 
show_magicians(magician_names)

// 
show_magicians(greatMagician)
export {}