/* javascript */
//
const timerStart = document.querySelector("#timerStart");
const timerStop = document.querySelector("#timerStop");

$(".clickme").click(function(e) {
  console.log("clicked!", e);
});

// let username = "";

let str = "";

let answers = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
  [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
  [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
];

$("form").submit(function(e) {
  e.preventDefault();
  // create array of all answers
  console.log("submitted");
  let input = [
    [$(".a1").val(), $(".a2").val(), $(".a3").val(), $(".a4").val(), $(".a5").val(), $(".a6").val(), $(".a7").val(), $(".a8").val(), $(".a9").val(), $(".a10").val()],
    [$(".a11").val(), $(".a12").val(), $(".a13").val(), $(".a14").val(), $(".a15").val(), $(".a16").val(), $(".a17").val(), $(".a18").val(), $(".a19").val(), $(".a20").val()],
    [$(".a21").val(), $(".a22").val(), $(".a23").val(), $(".a24").val(), $(".a25").val(), $(".a26").val(), $(".a27").val(), $(".a28").val(), $(".a29").val(), $(".a30").val()],
    [$(".a31").val(), $(".a32").val(), $(".a33").val(), $(".a34").val(), $(".a35").val(), $(".a36").val(), $(".a37").val(), $(".a38").val(), $(".a39").val(), $(".a40").val()],
    [$(".a41").val(), $(".a42").val(), $(".a43").val(), $(".a44").val(), $(".a45").val(), $(".a46").val(), $(".a47").val(), $(".a48").val(), $(".a49").val(), $(".a50").val()],
    [$(".a51").val(), $(".a52").val(), $(".a53").val(), $(".a54").val(), $(".a55").val(), $(".a56").val(), $(".a57").val(), $(".a58").val(), $(".a59").val(), $(".a60").val()],
    [$(".a61").val(), $(".a62").val(), $(".a63").val(), $(".a64").val(), $(".a65").val(), $(".a66").val(), $(".a67").val(), $(".a68").val(), $(".a69").val(), $(".a70").val()],
    [$(".a71").val(), $(".a72").val(), $(".a73").val(), $(".a74").val(), $(".a75").val(), $(".a76").val(), $(".a77").val(), $(".a78").val(), $(".a79").val(), $(".a80").val()],
    [$(".a81").val(), $(".a82").val(), $(".a83").val(), $(".a84").val(), $(".a85").val(), $(".a86").val(), $(".a87").val(), $(".a88").val(), $(".a89").val(), $(".a90").val()],
    [$(".a91").val(), $(".a92").val(), $(".a93").val(), $(".a94").val(), $(".a95").val(), $(".a96").val(), $(".a97").val(), $(".a98").val(), $(".a99").val(), $(".a100").val()]
  ];
  console.log(input);
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (answers[row][col] == input[row][col]) {
        console.log(answers[row][col], input[row][col], "correct!");
      } else {
        console.log(answers[row][col], input[row][col], "incorrect");
      }
    }
  }

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
