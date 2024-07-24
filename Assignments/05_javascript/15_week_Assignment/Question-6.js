// <!-- Question-6 :- Create a function that takes a string as input and returns the string reversed using string manipulation techniques.

const ongString= "hello Moto"

function checkString(input){
    return input.split("").reverse().join("");
}
console.log(checkString(ongString))