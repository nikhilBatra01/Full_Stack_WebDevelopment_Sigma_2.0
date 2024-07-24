// <!-- Question-7 :-   Build a program that utilizes a Map to store user information (name, age, email) and allows adding, updating, and deleting user records.

let sampleMap = new Map();

// // Function to Add User : =>>>
const addUser = (map, name, age, email) => {
  return map.set(email, [name, age, email]);
};

// Function to Delete User : =>>>
const deleteUser = (map, email) => {
  if (map.has(email)) {
    map.delete(email);
    return `User delete successfully`;
  } else {
    return `User not registered`;
  }
};

// Function to update User : =>>>
const updatedUser = (map, name, age, email) => {
  if (map.has(email)) {
    let user = map.get(email);
    user[0] = name;
    user[1] = age;
    return `User updated successfully`;
  } else {
    return `User not registered`;
  }
};

// Display User : =>>>
const displayUser = (map) => {
  for (let [key, value] of map) {
    console.log("//**********************//");
    console.log(`${key}`);
    console.log(`Name: ${value[0]}`);
    console.log(`Age: ${value[1]}`);
    console.log(`Email: ${value[2]}`);
    console.log("//**********************//");
  }
};

// Test-Case : =>>>
console.log(`Add User1`);
console.log(addUser(sampleMap, `Ashwani Kumar`, 28, `ashwani@gmail.com`));

console.log(`Add User2`);
console.log(addUser(sampleMap, `Chirag`, 24, `chirag@gmail.com`));

console.log(`Display User`);
displayUser(sampleMap);

console.log(`Delete User`);
console.log(deleteUser(sampleMap, `chirag@gmail.com`));

console.log(`Updated User`);
console.log(updatedUser(sampleMap, `Ashu Kaushik`, 28, `chirag@gmail.com`));

console.log(`Display User`);
displayUser(sampleMap);