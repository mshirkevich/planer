"use strict";

$(document).ready(function () {
	$(".openmenu").on("click", function () {
		$(this).css("opacity", "0");
		$(".asidemenu").addClass("asidemenu--active");
	});
	$(".closemenu").on("click", function () {
		$(".asidemenu").removeClass("asidemenu--active");
		$(".openmenu").css("opacity", "1");
	});
	$(".asd-menu__link, .asd-btn").on("click", function () {
		$(".asidemenu").removeClass("asidemenu--active");
		$(".openmenu").css("opacity", "1");
	});
	$("ul.tabs__caption").on("click", "li:not(.active)", function () {
		$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.tabs")
			.find("div.tabs__content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
	});
	$(".icon-down").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("li:not(.active)").hide();
		} else {
			$(this).addClass("active");
			$("li:not(.active)").show();
		}
	});
	var $topblock = $(".header");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$topblock.addClass("fixed");
			$(".logo img").css("z-index", "1");
		} else {
			$topblock.removeClass("fixed");
			$(".logo img").css("z-index", "100");
		}
	}); //scroll

	$("a.scroll, button.scroll").on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr("href")).offset().top,
				},
				777,
				function () {}
			);

		if ($(".h-menu").hasClass("h-menu--active")) {
			$(".h-menu").removeClass("h-menu--active");
		}
	});
	$(".popup").magnificPopup({
		type: "inline",
		preloader: false,
		removalDelay: 160,
		closeOnBgClick: true,
		enableEscapeKey: true,
		fixedContentPos: true,
		showCloseBtn: false,
	});
	$(document).on("click", ".popup-close", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
//# sourceMappingURL=index.js.map
