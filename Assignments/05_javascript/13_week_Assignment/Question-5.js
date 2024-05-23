// 5. You are building a shipping application. Write a program that takes the type of pakage ("standard","express",or "overnight")and uses a switch statement to calculate and print the esitmated delivery time based on the package type.For example,"standard" might take 3-5 days, "express" 1-2days,and "overnight", would be deliverd the next day.

let packageOne = "Standard"
let packageTwo = "express"
let packageThree = "overnight"
let package= "";

switch (packageThree) {
    case "Standard":
        console.log("package might take 3-5 days")
        break;
    case "express":
        console.log("package might take 1-2 days")
        break;
    case "overnight":
        console.log("package would be deliverd the next day")
        break;

    default:
        console.log("please insert valid package!");
        break;
}
