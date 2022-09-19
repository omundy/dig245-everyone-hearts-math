
/* javascript */

// hide the h1
// $("h1").hide();



// declare a new global scoped variable
let username = "";

// select the .submit class, listen for click
$(".submit").click(function(e){

  // the click is coming from a form,
  // so we need to prevent it from refreshing
  // or going to a new page (its default)
  e.preventDefault();

  // *get* the value of the input.username
  // store in variable
  username = $(".username").val();

  // log the value of username
  console.log("username is " + username);

  // we can also *set* the value of .username
  // $(".username").val("hello");

  // we can see all the props of the eventObject
  // https://api.jquery.com/click/#click-handler
  // console.log(e);

});
