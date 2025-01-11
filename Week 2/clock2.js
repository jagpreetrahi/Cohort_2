const { clear } = require("winston");

function updateClock(){
    let clock = new Date();
    let hours = clock.getHours();
    let min = clock.getMinutes();
    let ss = clock.getSeconds();

    let ampm = hours => 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    let result = `${hours} : ${min} : ${ss} : ${ampm}`;
    console.clear();
    console.log(result)

}


setInterval(updateClock , 1000);
updateClock();



