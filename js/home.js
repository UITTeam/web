
$(document).ready(function(){
	//fancybox.js init
	$('.fancybox').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});

	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();

});

$(function(){

	$('#btnSubmit').on('click', function(e)
	{
		var username = $('#username').val(),
			pass = $('#password').val(),
			correct_user= 'admin',
			correct_pass= 'admin';
		 if (username === correct_user && pass === correct_pass)
		  {
			 				  	 
			 $.ajax({
				type : 'POST', //Sử dụng kiểu gửi dữ liệu POST
				url : 'php/login.php', //gửi dữ liệu sang trang data.php
				data : username, //dữ liệu sẽ được gửi
				success : function(data)  // Hàm thực thi khi nhận dữ liệu được từ server
						  { 
							 if(data == 'false') 
							 {
							   alert('Không có người dùng');
							 }else{
							   $('#btnLogin').append('<p>hihi<p>');
							 }
						  }
				});
		  }
	  else
		  {
		  	e.preventDefault();
	 	 	swal("Error!", "Invalid password or username ủa ủa", "error");
		  }
		 
	});
/*
	$('#btnSubmit').on('click', function(e)
	{
		var username = $('#username').val(),
			pass = $('#password').val(),
			correct_user= 'admin',
			correct_pass= 'admin';
		 if (username === correct_user && pass === correct_pass)
		  {
			  e.preventDefault();				  	 
			  window.location.href = './user-info.html';
		  }
	  else
		  {
		  	e.preventDefault();
	 	 	swal("Error!", "Invalid password or username", "error");
		  }
	});
	*/

})
