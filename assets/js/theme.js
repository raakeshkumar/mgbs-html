/*jslint browser: true, vars: true, plusplus: true*/
/*global $, jQuery*/
(function ($) {
	"use strict";
	var App = {
		/*-- Init Function --*/
		init: function () {
			App.asideMenu();
			App.toggleFilter();
			App.publishQuestionnarie();
			App.onLargeVolumeFormSubmit();
			// App.wowAnimation();
		},

		asideMenu: function () {
			$(document).on('click', function (e) {
				if ($(e.target).closest('#navToggleButton').length) {
					$('body').toggleClass('triggerMenu');
					e.stopPropagation();
					e.preventDefault();
				} else if (!$(e.target).closest('body, #aside').length) {
					$('body').removeClass('triggerMenu');
				} else if ($(e.target).closest('#aside ul li a').length) {
					$('body').removeClass('triggerMenu');
				}
			});
		},

		toggleFilter: function () {
			$('#toggleFilter').click(function () {
				$(this).toggleClass('active');
				$('#filterForm').slideToggle();
			});
		},

		publishQuestionnarie: function () {
			$('#publishQuestionnaries').click(function () {
				setTimeout(() => {
					$('#publishSuccessfullModal').modal('show');
				}, 500);
			});
		},

		onLargeVolumeFormSubmit: function () {
			$("#loginForm").validate({
				rules: {
					email: {
						required: true,
						email: true
					},
					password: {
						required: true,
						minlength: 5
					}
				}
			});
			$("#registerForm").validate({
				rules: {
					name: {
						required: true,
					},
					email: {
						required: true,
						email: true
					},
					password: {
						required: true,
						minlength: 5
					},
					c_password: {
						required: true,
						minlength: 5,
						equalTo: "#password"
					}
				}
			});
			$("#forgotPasswordForm").validate({
				rules: {
					email: {
						required: true,
						email: true
					}
				}
			});
			$("#createQuestionnariesForm").validate({
				rules: {
					name: {
						required: true
					},
					question_set: {
						required: true
					},
					answer_length: {
						required: true
					},
					start_date: {
						required: true
					},
					end_date: {
						required: true
					},
				},
				submitHandler: function (form) {
					window.location.href = "/create-questionnaires-step2.html";
				},
			});
		},

		wowAnimation: function () {
			var wow = new WOW({
				boxClass: 'wow', // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0, // distance to the element when triggering the animation (default is 0)
				mobile: true, // trigger animations on mobile devices (default is true)
				live: true, // act on asynchronously loaded content (default is true)
				callback: function (box) {
					// the callback is fired every time an animation is started
					// the argument that is passed in is the DOM node being animated
				},
				scrollContainer: null // optional scroll container selector, otherwise use window
			});
			wow.init();
		}

	};
	$(function () {
		App.init();
	});
}(jQuery));