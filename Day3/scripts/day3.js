/*

Take a number from a user and write a function which checks whether the number is even or
odd. Assign the result to a variable and log that variable in the console.
Example Input: 23
Output: The number entered is 23 and Number is odd

*/

let a = prompt("Enter number");

function even_odd(a){
if (a%2 == 0){
    console.log(`the Number entered ${a} and it is even`);

}
else{
    console.log(`the Number entered ${a} and it is odd`);
}
}


even_odd(a);

