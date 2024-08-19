// <!-- Question-3 :-  Write a program that takes an object as input and returns the number of properties it has.

const properties ={
    Name: 'Brendan Eich',
    Born: `July 4, 1961`,
    Place: `Pittsburgh, Pennsylvania`,
    Created: `JavaScript programming language`,
    Co_Founded: `Mozilla Project`,
    Website: `Brendaneich.com`,
    Nationality: 'American',
}
function countProp(obj){
    return `There are total ${Object.keys(obj).length} properties`
}
const result = countProp("Mozilla Project")
console.log(result)