
let a= prompt("Enter 1st value");
let b= prompt("Enter 2st value");

let operation = prompt( "operations supported are /n 1 Addition /n 2 SUbtraction /n 3 Multiplication /n 4 Division /n PLease enter your choice?")

if (operation == "1"){
    console.log(`Selection addition and sum is ${parseInt(a)+parseInt(b)}`)
}
else if (operation == "2"){
    console.log(`Selection addition and sum is ${parseInt(a)-parseInt(b)}`)
}
else if (operation == "3"){
    console.log(`Selection addition and sum is ${parseInt(a)*parseInt(b)}`)
}
else if (operation == "4"){
    console.log(`Selection addition and sum is ${parseInt(a)/parseInt(b)}`)
}
else(
    console.log("Input provided is wrong")
)