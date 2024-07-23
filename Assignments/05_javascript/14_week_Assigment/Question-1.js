let array = ["Nikhil", "Sumit","Mithun", "Akshay", "Gobind", "Sunil", "HiUser"];
function IsUserPresent(user) {
    if (array.includes(user)) {
        console.log(`Yes,${user} is a valid user`);
        return true
    }else{
        console.log(`No,${user} is a not valid user`);
        return true
    }
}
console.log(IsUserPresent("Mithun"))

console.log(IsUserPresent("someone"))