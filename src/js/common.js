$(document).ready(function() {

	$('.number-number p:first').addClass('active');
	$('.buttns a:first').addClass('active');
	$('.number-number p:not(:first)').hide();

	$('.buttns a').on('click', function () {
		//$(this).parent().find('.active').removeClass('.active');
		$(this).addClass('active');
		$(this).siblings('a').removeClass('active');
	});

	// $('.buttns').children().on('click', function () {
	// 	$(this).toggleClass('.active');
	// });

	$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    //dots:true,
    autoplay:true,
    autoplayTimeout:1000,
    items:4,
    //nav: true
	});

	$('body').scrollspy({target: ".navbar"});
});