
/* javascript */

// $("h1").hide();

$(".clickme").click(function(e){
  console.log("clicked!",e);
});

// let username = "";

let str = "";

let answers = [[1,2,3,4,5,6,7,8,9,10],
              [2,4,6,8,10,12,14,16,18,20]];

$("form").submit(function(e){
  e.preventDefault();
  // create array of all answers
  console.log("submitted");
  let input = [[$(".a1").val(),$(".a2").val()],[]];
  console.log(input);
  for(let row = 0; row < 11; row++) {
    for(let col = 0; col<11;col++) {
      if(answers[row][col] == input[row][col]) {
        console.log(answers[row][col], input[row][col], "correct!");
      } else {
        console.log(answers[row][col], input[row][col],"incorrect");
      }
    }
  }

  // username = $(".username").val();
  // console.log(username);
});

$(".output").html(str);
