
/* javascript */
//
const timerStart = document.querySelector("#timerStart");
const timerStop = document.querySelector("#timerStop");

$(".clickme").click(function(e){
  console.log("clicked!",e);
});

let username = "";

$("form").submit(function(e){
  e.preventDefault();
  username = $(".username").val();
  console.log(username);
});

let timerInterval;

function timer(){
  if (!timerInterval){
    let seconds = 0;
    timerInterval = setInterval(function(){
      seconds++;
      document.getElementById("timerText").innerHTML = seconds;
    }, 1000);
  }
}

function stopTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
}


// $("#timerStart").click(function(){

// });

timerStart.addEventListener("click", timer);
timerStop.addEventListener("click", stopTimer);
