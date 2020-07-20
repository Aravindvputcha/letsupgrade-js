// Question 6:
// Rewrite the function using '?' or '||'
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them
// to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the
// input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special
// handling for a non-numeric input in this task.

// function myfunc(){

//     let a = prompt("Enter a value");
//     return a;
// }

let myfunc = ()=> prompt("Enter a value");

 ((myfunc()>100)) ? "value >100 typed ": myfunc());
