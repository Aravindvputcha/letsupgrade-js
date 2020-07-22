// Question 1:
// Write a program which does the following things:
// 1. Takes a positive number from the user.
// 2. Makes an array of numbers till the number given by user
// 3. Use higher order function to filter the odd numbers
// 4. Generate and array of the cubes of the filtered numbers

var input_list=[];
function myfunc(){

    for (i=1;i<=10;i++){
    let num= prompt("Enter a Positive number");
    num= parseInt(num);
    console.log(`number entered ${num} and ${typeof(num)}`)
    let run = true;
    if (Number.isInteger(num)){
        input_list.push(num)
    }
    else{
        break;
    }
    }
    return (input_list);
}
 list_returned= myfunc();
 var odd_list=[]
 let filter_odd = list_returned.forEach(element => {
    console.log(element);
    if (element%2 !=0){
        odd_list.push(element);
    }
    
 });

 console.log(odd_list);

 let cubes= odd_list.filter(e1=>e1**3);

 console.log(odd_list);


