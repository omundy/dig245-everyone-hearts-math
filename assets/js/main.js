
/* javascript */

// $("h1").hide();

$(".clickme").click(function(e){
  console.log("clicked!",e);
});

let username = "";

$("form").submit(function(e){
  e.preventDefault();
  username = $(".username").val();
  console.log(username);
});
