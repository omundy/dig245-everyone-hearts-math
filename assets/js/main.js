/* javascript */
//$("h1").hide();

let username = "";
let requiredUsername = "secret";

$("form").submit(function (e) {
  e.preventDefault();
  username = $(".username").val();
  console.log("username is " + username);


  let str = " ";
  if (username == requiredUsername){
    console.log("nice");
    str = `
    <div class="alert alert-success" role="alert">
      welcome, friend ${username}
    </div>
    `;
  }

  $('.output').html(str);
});
