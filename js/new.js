//step 1 : add click Event handler with the submit button.

document.getElementById('btn-submit').addEventListener('click', function () {


	// step 2 :   get the email address inside the email input field
	//always remember to use .value to get text from an input field 

	const emailField = document.getElementById('user-email');
	emailField.value;
	//console.log(emailField.value)

	// step 3 : get password
	
	const userPass = document.getElementById('user-pass');
	userPass.value;
	//console.log(userPass.value)
	if(emailField.value ==='jubairsultan1999@gmail.com' && userPass.value === "sultan") {
		window.location.href = 'bank.html';
	}
	else {
		alert("invalid user")
	}
})

