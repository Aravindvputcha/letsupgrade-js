

let a = prompt("Enter marks");

function marks(a){
if (a >= 80){
    console.log(`the marks got ${a} and  he awarded with grade A `);

}
else if (a<80 && a>=50){
    console.log(`the marks got ${a} and  he awarded with grade B`);

}
else{
    console.log(`the marks got ${a} and  he awarded with grade C`);
}
}

marks(a);