let timerElement =document.getElementById("timer");   // grab html element and save to timerElement
console.log(timerElement.innerText);      // print that id to console should be 5
let timesUp = document.getElementById("times-up-message");  
timerElement.innerText="hey!!";     // override timer id to hey!!
let timeRemaining = 20;           // set start of counter

function countdown(){             // function that counts down
  timeRemaining = timeRemaining- 1;   // each time this is called decrement by 1
  console.log(timeRemaining);       // show time decrementing in console
  timerElement.innerText = timeRemaining; // timer id now renders time remaining
  // grab timer element number save as tr
  if(timeRemaining>0){                     // if statement more than 0
    timerElement.innerText = timeRemaining;       // show the decrement number
    }
  else{
  timesUp.innerText="Time is up";         // once below 0 display time is up
  timerElement.innerText = 0;
  }
  
}

setInterval(countdown, 1000);     // interval function that takes function and runs it per time            