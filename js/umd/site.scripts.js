(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== 'undefined') {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.siteScripts = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	jQuery(document).ready(function ($) {
		var landingHeight = $('#home').height();
		var counters = {};
		var wow = new WOW({
			boxClass: 'animate',
			callback: function callback(box) {
				if ($(box).hasClass('fact')) {
					var countTo = parseInt($(box).find('h1').text().replace(/,/g, ""));
					var countElement = $(box).data('counter-id');
					counters[countElement] = new CountUp(countElement, 0, countTo, 0, 2);
					counters[countElement].start(function () {
						/* Animate counters */
						setInterval(function () {
							counters["counter2"].update(parseInt($("#counter2").text().replace(/,/g, "")) + 1);
						}, 15000);
						setInterval(function () {
							counters["counter3"].update(parseInt($("#counter3").text().replace(/,/g, "")) + Math.floor(Math.random() * (10 - 1 + 1)));
						}, 3000);
					});
				}
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		});
		wow.init();
		$(window).bind('resize', function () {
			landingHeight = $('#home').height();
		});
		$(window).bind('scroll load', function () {
			$(window).scrollTop() > landingHeight ? $('#nav').addClass('stuck') : $('#nav').removeClass('stuck');
		});
		$('a').smoothScroll({ offset: -60 });
	});
});
