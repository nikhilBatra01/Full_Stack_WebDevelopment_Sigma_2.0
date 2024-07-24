// <!-- Question-4 :-  Develop a program that accepts an object and a property name, and checks if the object has the specified property.

const properties ={
    Name: 'Brendan Eich',
    Born: `July 4, 1961`,
    Place: `Pittsburgh, Pennsylvania`,
    Created: `JavaScript programming language`,
    Co_Founded: `Mozilla Project`,
    Website: `Brendaneich.com`,
    Nationality: 'American',
}

function checkAvailablity(obj,props){
    if(obj.hasOwnProperty(props)){
        console.log('yes,this props is availale')
    }else{
        console.log('No,there props is not available')
    }
}
checkAvailablity(properties,"Name")
checkAvailablity(properties,"Born")