// <!-- Question-1 :-  Create an object representing a car with properties like "make," "model," and "year." Write a function to display all the properties of the car.

const car = {
    make: "Toyota",
    model: "Fortuner",
    year:2022
}

function DisplayCarProperties(car){
    for(const obj in car){
        console.log(`${obj} : ${car[obj]}`)
    }
}
DisplayCarProperties(car)   