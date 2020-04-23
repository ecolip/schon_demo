$(document).ready(function(){
	//nav bag
	$('.li-1').click(function(e){
		$(this).find('.dropdown-menu').fadeIn();
		$(this).find('.arrow').fadeIn();
		var isbgMenu = $(e.currentTarget).is('.bg-item');

		if(isbgMenu){
			$('.view-container').fadeIn();
		}	

		$('.view-container').click(function(e){
			$(this).fadeOut();
			$('.dropdown-menu').fadeOut();
			$('.nav-item .arrow').fadeOut();
		});

		//search-menu fadeOut
		$('.dropdown-menu .icon-cancel-2').click(function(e){
			$(this).closest('.dropdown-menu').fadeOut();
		});
	});

	//language choice
	$('.language').click(function(){
		$('.language-menu').toggleClass('active');
	});

	//home-> featureeds prev-next
	$('.prev-next a').click(function(e){
		e.preventDefault();
		$('a').removeClass('active');
		$(this).addClass('active');
	});

	//product-> detail
	$('.tab li').click(function(e){
		var index = $(e.currentTarget).index();
		
		$('.tab li').removeClass('active').eq(index).addClass('active');
		$('.tab-content').removeClass('active').eq(index).addClass('active');
	});

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