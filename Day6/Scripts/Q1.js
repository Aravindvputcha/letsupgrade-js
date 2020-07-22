// Question 1:
// Write a program that will iterate over an array of colors and change the background of the page
// after 5 seconds.

let colors= ["red", "blue", "black", "brown","yellow"];
let i=0;

let elem= document.getElementById('mycolor');
console.log(elem , colors.length);


colors.forEach(color =>{
    console.log(`background-color:${color};`);
    setTimeout(" ",1000)
    elem.setAttribute("style", `background-color:${color};`);

})