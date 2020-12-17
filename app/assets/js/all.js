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
	$(".carousel__inner a").click(function () {
		$(".carousel__item--active img").attr("src", $(this).attr("href"));
		return false;
	});
	$('#reservationModal').on('hidden.bs.modal', function () {
		location.reload();
	 })
});

$(function () {
	$("#starDate").datepicker({
		format: "yyyy-mm-dd",
		autoclose: true,
		startDate: "today",
		todayHighlight: true
	});
	$("#endDate").datepicker({
		format: "yyyy-mm-dd",
		autoclose: true,
		startDate: "today",
		todayHighlight: true
	});
});


let currentTab = 0;
showTab(currentTab);
function showTab(index) {
	let tabItem = document.getElementsByClassName("tab");
	tabItem[index].style.display = "block";
}

function nextPrev(index) {
	let tabItem = document.getElementsByClassName("tab");
	tabItem[currentTab].style.display = "none";
	currentTab = currentTab + index;
	showTab(currentTab);
}

document.addEventListener('DOMContentLoaded', function() {
	showTab(currentTab);
}, false);
