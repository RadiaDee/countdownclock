let timerElement =document.getElementById("timer");   // set id from html to timerElement
console.log(timerElement.innerText);      // print id to console
timerElement.innerText="hey!!";     // set timer to 10 instead 
let timeRemaining = 10;           // set counter for function

function countdown(){             // function that counts down by 5
  timeRemaining = timeRemaining- 1;
  console.log(timeRemaining);       // show time decrementing in console
  timerElement.innerText = timeRemaining; // make the id from html is set to decrement
  
  if(timeRemaining>0){                     // if statement to stop at 0
    timerElement.innerText = timeRemaining;       // if not 0 make id from html the decrement
    }
    else{
    timerElement.innerText="Time is up";         // once below 0 show time is up
    }
  
}

setInterval(countdown,1000);     // interval function that takes function and runs it per time            