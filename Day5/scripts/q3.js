// Question 3:
// Using promises/async await/fetch get the random todos from the json placeholder api. And log all the
// completed todos to the console.
// API Endpoint : https://jsonplaceholder.typicode.com/todos


async function random_code(){

const response= fetch('https://jsonplaceholder.typicode.com/todos'
);

const data= await (await response).json();
console.log(data);
// .then(response => response.json())
// .then(data =>console.log(data))

}

random_code();
