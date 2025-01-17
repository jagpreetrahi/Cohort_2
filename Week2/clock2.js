

function updateClock(){
    let clock = new Date();
    let hours = clock.getHours();
    let min = clock.getMinutes();
    let ss = clock.getSeconds();

    let hour = hours > 12 ? 'PM' : 'am'

    hours = hours % 12;
   
    console.log(hours);
    
    let result = `${hours} : ${min} : ${ss} : ${hour}`;
    console.clear();
    console.log(result)

}


setInterval(updateClock , 1000);
updateClock();



