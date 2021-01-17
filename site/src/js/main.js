$(document).ready(function () {
	$(".owl-carousel.partners-carousel").owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	$(".owl-carousel.licenses-carousel").owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	$(".licenses-carousel .item_preview").on('click', function (e) {
		let src = e.target.attributes.src.value;
		$(".license_full img").attr("src" ,src);
		$(".license_full").css('display', "flex");
	});
	$(".license_full").on('click', function (e) {
		$(".license_full").css('display', "none");
	});

	document.onscroll = handleScroll;

	$('.feedback-form button').on('click', function (e) {
		e.preventDefault();
		console.log('Form')
	});
});

let navigationHideTop = false;

function handleScroll(e) {
	if (!navigationHideTop && window.scrollY > 0) {
		document.querySelector(".navigation-wrapper").classList.add('hide-top');
		navigationHideTop = true;
	}
	if (navigationHideTop && window.scrollY === 0) {
		document.querySelector(".navigation-wrapper").classList.remove('hide-top');
		navigationHideTop = false;
	}
}
