// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer, model_name,...options){
    let obj={
        manufacturer: manufacturer,
        model_name: model_name
    }
    options.map((option)=>{
        let [key, value]= option.split(":")
        obj[key.trim()] = value.trim()
    })

    return obj
}


let car_Info = carInfo('Toyota', 'Camry', 'color: blue', 'year: 2022', 'trim: XSE');

console.log(car_Info);

