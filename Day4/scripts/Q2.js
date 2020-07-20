


// Question 2:
// Destructure the following object


const student = {

    name: "Helsinki",
    age: 21,
    projects: {
        dicegame: "two player dice game using java script"
    }
}

console.log ( student.destruct)

let destruct

const {name,age,projects:{dicegame}} = student;

console.log ( name, age, dicegame)