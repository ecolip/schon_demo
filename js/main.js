$(document).ready(function(){
	//nav bag
	$('.nav-item.li-1').click(function(e){
		var isbgMenu = $(e.currentTarget).is('.bg-item');

		if(isbgMenu){
			$(this).find('.dropdown-menu').toggleClass('active');
			$(this).find('.arrow').toggleClass('active');
			$('body').toggleClass('active');
		}	
	});

	$('.nav-item.searchs').click(function(e){
		$(this).children('.dropdown-menu').toggleClass('active');
	});
	
	


	//language choice
	// $('.language').click(function(){
	// 	$('.language-menu').toggleClass('active');
	// });

	//product-> detail
	// $('.tab li').click(function(e){
	// 	var index = $(e.currentTarget).index();
		
	// 	$('.tab li').removeClass('active').eq(index).addClass('active');
	// 	$('.tab-content').removeClass('active').eq(index).addClass('active');
	// });

	//popup
	// $(document).scroll(function(){
	// 	var scrollTop = $(document).scrollTop();
		
	// 	if(scrollTop==1){
	// 		$('.popup-container').fadeIn();
	// 		$('.popup-container .icon-cancel').click(function(e){
	// 			$('.popup-container').fadeOut();
	// 		});	
	// 	}		
	// });	
});