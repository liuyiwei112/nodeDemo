var baseUrl = 'http://localhost:3000/';
function menuClick(_url){
	$('.sidebar-menu li').each(function(k,v){
		if($(v).attr('onclick').indexOf(_url)>-1){
			$(v).parent().find('.active').removeClass('active');
			$(v).addClass('active');
			$('.content-header h1').html($(v).find('span').html());
			goToUrl(_url);
			return;
		}
	})
}

function goToUrl(_url){
	$.get(_url,function(d){
		$('.content').html(d);
	})
}

$(function(){
	menuClick('/home');
})
