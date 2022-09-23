/* javascript */
//
const timerStart = document.querySelector("#timerStart");
const timerStop = document.querySelector("#timerStop");

$(".clickme").click(function(e) {
  console.log("clicked!", e);
});

// let username = "";

let answers =
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
   2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
   3, 6, 9, 12, 15, 18, 21, 24, 27, 30,
   4, 8, 12, 16, 20, 24, 28, 32, 36, 40,
   5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
   6, 12, 18, 24, 30, 36, 42, 48, 54, 60,
   7, 14, 21, 28, 35, 42, 49, 56, 63, 70,
   8, 16, 24, 32, 40, 48, 56, 64, 72, 80,
   9, 18, 27, 36, 45, 54, 63, 72, 81, 90,
   10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

$("form").submit(function(e) {
  e.preventDefault();
  // create array of all answers
  console.log("submitted");
  // let input = [
  //   [$(".a1"), $(".a2"), $(".a3"), $(".a4"), $(".a5"), $(".a6"), $(".a7"), $(".a8"), $(".a9"), $(".a10")],
  //   [$(".a11"), $(".a12"), $(".a13"), $(".a14"), $(".a15"), $(".a16"), $(".a17"), $(".a18"), $(".a19"), $(".a20")],
  //   [$(".a21"), $(".a22"), $(".a23"), $(".a24"), $(".a25"), $(".a26"), $(".a27"), $(".a28"), $(".a29"), $(".a30")],
  //   [$(".a31"), $(".a32"), $(".a33"), $(".a34"), $(".a35"), $(".a36"), $(".a37"), $(".a38"), $(".a39"), $(".a40")],
  //   [$(".a41"), $(".a42"), $(".a43"), $(".a44"), $(".a45"), $(".a46"), $(".a47"), $(".a48"), $(".a49"), $(".a50")],
  //   [$(".a51"), $(".a52"), $(".a53"), $(".a54"), $(".a55"), $(".a56"), $(".a57"), $(".a58"), $(".a59"), $(".a60")],
  //   [$(".a61"), $(".a62"), $(".a63"), $(".a64"), $(".a65"), $(".a66"), $(".a67"), $(".a68"), $(".a69"), $(".a70")],
  //   [$(".a71"), $(".a72"), $(".a73"), $(".a74"), $(".a75"), $(".a76"), $(".a77"), $(".a78"), $(".a79"), $(".a80")],
  //   [$(".a81"), $(".a82"), $(".a83"), $(".a84"), $(".a85"), $(".a86"), $(".a87"), $(".a88"), $(".a89"), $(".a90")],
  //   [$(".a91"), $(".a92"), $(".a93"), $(".a94"), $(".a95"), $(".a96"), $(".a97"), $(".a98"), $(".a99"), $(".a100")]
  // ];

  for (let i = 1; i < 101; i++) {
    let position = ".a" + i;
    let colorPos = "a" + i;
    let value = $(position).val();

    if (answers[i-1] == value) {
      console.log(answers[i-1], value, "correct!");
      document.getElementsByClassName(colorPos)[0].style.backgroundColor = 'green';
      // change color
    } else {
      console.log(answers[i-1], value, "incorrect");
      document.getElementsByClassName(colorPos)[0].style.backgroundColor = 'red';

    }
  }

  // for (let row = 0; row < 10; row++) {
  //   for (let col = 0; col < 10; col++) {
  //     if (answers[row][col] == input[row][col].val()) {
  //       console.log(answers[row][col], input[row][col].val(), "correct!");
  //       document.getElementsByClassName(input[row][col])[0].style.backgroundColor = 'green';
  //       // change color
  //     } else {
  //       document.getElementsByClassName(input[row][col])[0].style.backgroundColor = 'red';
  //
  //     }
  //   }
  // }

  // username = $(".username").val();
  // console.log(username);
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
