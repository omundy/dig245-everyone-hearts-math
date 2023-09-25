/* javascript */

// hide the h1
// $("h1").hide();

let clicks = 0;

// global scoped variable
let passcode = "";
let requiredPasscode = "secret";

$(".clickme").click(function () {
	clicks++;
	console.log(`You have clicked ${clicks} times!`);
	$(".clicks1").val(clicks);
	$(".clicks2").val(clicks * clicks);
	$(".clicks3").val(clicks * clicks * clicks);
	$(".clicks4").val(clicks * clicks * clicks * clicks);
	$(".clicks5").val(clicks * clicks * clicks * clicks * clicks);
	$(".clicks6").val(clicks * clicks * clicks * clicks * clicks * clicks);
	$(".clicks7").val(
		clicks * clicks * clicks * clicks * clicks * clicks * clicks
	);
});

// select the form, listen for click
$("form").submit(function (e) {
	// the click is coming from a form, so we need to prevent
	// it from refreshing or going to a new page (its default)
	e.preventDefault();

	// view the eventObject - https://api.jquery.com/submit/
	// console.log(e);

	// *get* the value of the input.passcode store in variable
	passcode = $(".passcode").val();

	// log the value of passcode
	console.log("passcode is " + passcode);

	if (passcode == requiredPasscode) {
		$(".output").html(`
                    <div class="alert alert-success" role="alert">
                    Welcome, member
                    </div>`);
	} else {
		$(".output").html(`
                    <div class="alert alert-danger" role="alert">
                    Sorry that is not the right answer
                    </div>`);
	}
});
