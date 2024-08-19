// <!-- Question-2 :-  Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const student = {
    name: "Nikhil",
    age: 18,
    grade: "A"
}

function UpdateGrade(NewGrade) {
    student.grade = NewGrade;
}
UpdateGrade("B")
console.log(student)