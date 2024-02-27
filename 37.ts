// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. 
export {}

function make_shirt(size="Large",message="I love TypeScript"){
    console.log( `The T-shirt is size ${size} and it has the message: "${message}".`)
}

make_shirt()
make_shirt("Medium")
make_shirt("Small", "I also love JavaScript")