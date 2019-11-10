$(document).ready(function() {
	$('ul.menu li').click(function(event) {
		
		var _type = $(this).data('type');
		var _title = $(this).text(); // lấy text từ thẻ
		console.log(_type);
		$('h3.title').text(_title); // thêm text vào thẻ
		$('.content img').each(function() {
			if($(this).hasClass(_type)){
				$(this).removeClass('hidden');
				$(this).addClass('bounceInUp animated');
			}else {
				$(this).addClass('hidden');
				$(this).removeClass('bounceInUp animated');
			}
		});
	});
});