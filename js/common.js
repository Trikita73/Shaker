$(function() {

	//Owl-Carousel
	$('.owl-carousel').owlCarousel({
    rtl:true,
		loop:true,
		//margin:10,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		nav:true,
		dots: false,
    responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	//fancybox
	$(document).ready(function() {
    $(".gallery").fancybox();
	});
	
});


