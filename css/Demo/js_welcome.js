
function onFormSubmit()
{
	var username = document.form.username.value;
	var pass = document.form.password.value;
	var correct_user= 'admin';
	var correct_pass= 'admin';
	 if (username == correct_user && pass ==correct_pass)
	  {
	  	swal("Good job!", "Successfully", "success");
	  	window.open('html_banner.html');
	  }
	  else {
	  	alert("Incorrect! Try again");
	  }
}

