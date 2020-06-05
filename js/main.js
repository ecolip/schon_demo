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
	$('.navbar-nav .bags').on('click', '.icon-cancel-1', function(e){
		console.log('do');
		var result = confirm('Are you want to delete?');
		if(result){
			$(e.currentTarget).closest('.media').remove();
		}
	});

	//order->language choice
	$('.language').click(function(){
		$('.language-menu').toggleClass('active');
	});

	//Home->popup
	//設定latterState狀態為true
	var latterState = true; 
	//當window滾動時，觸發判斷式
	$(window).scroll(function(){
		if(latterState && $(window).scrollTop() > 100){
			$('.popup-container').fadeIn();
		}
	});
	//當點取消時移除active，並更改latterState狀態為false
	//只要latterState狀態為false，判斷式內的程式就不會被觸發
	$('.icon-cancel').click(function(e){
		$(this).closest('.popup-container').fadeOut();
		latterState = false;
	});

	//home->click ancher, animate scroll to target
	//click ancher, prevent original action
	//get ancher attr
	//get ancher position
	//body animate scroll to position of ancher
	$('.featureds a.move').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop:$(target).offset().top}, 600);
	});

	//home->click top, animate scroll to scrollTop
	//click top
	//body animate scroll to scrollTop 0
	$('#top').on('click', function(e){
		$('html, body').animate({scrollTop: 0},600);
		// var target = $(this).attr('href');
		// $('html, body').animate({scrollTop: $(target).offset().top}, 600);
	});
	
	//product-detail
	$('.tab li').click(function(e){
		var index = $(e.currentTarget).index();
		
		$('.tab li').removeClass('active').eq(index).addClass('active');
		$('.tab-content').removeClass('active').eq(index).addClass('active');
	});

	//product-list->pagenation
	$('.pagination .page-link').click(function(e){
		e.preventDefault();
		var indexPage = $(this).parent('li').index();
		$('.pagination .page-link').removeClass('active');
		$(this).addClass('active');
		$('.featureds .featured').removeClass('active').eq(indexPage).addClass('active');
	});

	//order-shopping-car
	$('.shopping-items').on('click', '.btn', function(e){
		var result = confirm('Are you want to delete?');
		if(result){
			$(e.currentTarget).closest('li').remove();
		}
	});

	//contacts
	// $('.chair-maker .btn').click(function(e){
	// 	var result = $('#myform').serialize();
	// 	alert('確定要送出:'+ $('#myform').serialize()+'?'); //html input要有name當作key，而值是value

	// 	// $.post('php/create.php', {content: 'result'}, function(data,textStatus, xhr){
	// 	// 	//optional stuff to do after success
	// 	// }, 'json');
	// });
	
});