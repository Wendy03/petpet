var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		767: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3
		}
	},
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});

$(document).ready(function () {
	$("#SubscribeBtn").click(function (e) {
		e.preventDefault();
		if ($(".subscribeEmail").val() == '') {
			alert("請填寫您的E-mail");
			$(".subscribeEmail").focus()
		} else {
			alert("感謝您的訂閱");
			$(".subscribeEmail").val('')
		}
	});
	$('.datepicker').datepicker()
});


