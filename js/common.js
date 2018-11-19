$(function() {

	//Owl-Carousel
	$('.owl-carousel').owlCarousel({
    rtl:true,
		loop:true,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		nav:true,
		dots: false,
    responsive: {
			0: {
				items: 1
			},
			568: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			},
			1500: {
				items: 5
			}
		}
	});
	
});
