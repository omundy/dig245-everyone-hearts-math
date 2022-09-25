/* javascript */

// $("h1").hide();
$(".clickme").click(function(eventObject){
  console.log("hello!", eventObject);
});

let username = "";
let requiredUsername = "secret";

$("form").submit(function(e){
  e.preventDefault();
  username = $(".username").val();
  console.log(username);


let str = "";

if (username == requiredUsername){
  str = `
  <div class="alert alert-success" role="alert">
  Welcome, friend.
  </div>`;
}
else {
  str = `
  <div class="alert alert-danger" role="alert">
  Not allowed.
  </div>`;
}


$(".output").html(str);

});
