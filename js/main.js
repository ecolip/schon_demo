$(document).ready(function(){
	//navigation
	$('.nav-item .nav-link').click(function(e){
		var isbgMenu = $(e.currentTarget).is('.bg-item');

		if(isbgMenu){
			$(this).siblings('.dropdown-menu').toggleClass('active');
			$(this).find('.arrow').toggleClass('active');
			$(this).siblings('.dropdown-menu').find('.arrow').toggleClass('active');
			$('body').toggleClass('active');
		}	
		else{
			$(this).siblings('.dropdown-menu').toggleClass('active');
		}

		$('.searchs .delete-btn').click(function(e){
			$(this).closest('.dropdown-menu').removeClass('active');
		});
	});
	
	//product-> detail
	$('.tab li').click(function(e){
		var index = $(e.currentTarget).index();
		
		$('.tab li').removeClass('active').eq(index).addClass('active');
		$('.tab-content').removeClass('active').eq(index).addClass('active');
	});

	$('.product-sm-list .owl-carousel img').click(function(e){
		var index = $(e.currentTarget).index();
		console.log(index); /*為什麼index永遠都是0呢?*/
		$('.list-img img').removeClass('active').eq(index).addClass('active');
	});

	//product-list->pagenation
	$('.pagination .page-link').click(function(e){
		e.preventDefault();
		var indexPage = $(this).parent('li').index();
		$('.pagination .page-link').removeClass('active');
		$(this).addClass('active');
		$('.featureds .featured').removeClass('active').eq(indexPage).addClass('active');
	});

	//language choice
	// $('.language').click(function(){
	// 	$('.language-menu').toggleClass('active');
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