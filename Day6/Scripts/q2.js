// Write a program that will display the multiplication table of a number on the webpage in a proper
// format. Take the input from the user.
// Input - 5
// Output - 5 x 1 = 5
// 5 x 2 = 10
// and so on…

var arr=[1,2,3,4,5,6,7,8,9,10]
let myvar= prompt("enter input");
const list= document.querySelector('#list');

arr.forEach(el =>{
    list.innerHTML +=`<li> ${myvar} * ${el} = ${myvar* el}</li>`
})

