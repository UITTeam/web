
$(function(){
	$('#login').on('click', function(e)
	{
		$('.row').addClass('zoomOutUp animated');
	});

	$('#close').on('click', function(e)
	{
		$('.row').removeClass('zoomOutUp animated');
		$('.row').addClass('fadeInUp animated');
	});

	$('#btnSubmit').on('click', function(e)
	{
		var username = $('#username').val(),
			pass = $('#password').val(),
			correct_user= 'admin',
			correct_pass= 'admin';
	 if (username === correct_user && pass === correct_pass)
		  {
		  	e.preventDefault();
 			window.location.href = './home.html';
		  }
	  else
		  {
		  	e.preventDefault();
	 	 	swal("Error!", "Invalid password or username", "error").delay(1);
		  }
	});
})



