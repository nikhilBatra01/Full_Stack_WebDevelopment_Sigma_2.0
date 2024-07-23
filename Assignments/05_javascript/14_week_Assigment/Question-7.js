
let min = 2050;
let max = 3260;

function genrateOtp(){
    return Math.floor(Math.random() * (max - min + 10) + min)
}
console.log(`Here is your otp : ${genrateOtp()}`)