
function changecolor(){
    console.log("i called method");
    setTimeout(()=>{
        document.body.style.backgroundColor= 'black';
        document.body.style.color= 'white';

    },5000);
}
changecolor();

const toggle = document.getElementsByClassName("toggle");
console.log(toggle)

const ctime = document.getElementById("clock");
function clock(){
    let date = new Date();
    let time= date.toLocaleTimeString();
    ctime.innerText = time;
    
}

setInterval(clock, 1000);
