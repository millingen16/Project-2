'use strict';

$(document).ready(() => {
	$('.sidenav').sidenav({
		menuWidth: 300,
		edge: 'left',
		closeOnClick: false,
		draggable: true,
	});

	$('.materialboxed').materialbox();
	jQuery.each(['put', 'delete'], function(i, method) {
		jQuery[method] = function(url, data, callback, type) {
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback,
			});
		};
	});

	$(function() {
		$('.check-out').on('click', function(e) {
			e.preventDefault(); // cancel the link itself
			const id = $(this).attr('data-bookid');
			$.get(`/api/book/${id}`, function(book) {
				book.availableQuantity -= 1;
				$.put(`/book/${id}`, book, function(res) {
					window.location.reload();
				});
			});
		});
	});

	$(function() {
		$('.check-in').on('click', function(e) {
			e.preventDefault(); // cancel the link itself
			const id = $(this).attr('data-bookid');
			$.get(`/api/book/${id}`, function(book) {
				book.availableQuantity += 1;
				$.put(`/book/${id}`, book, function(res) {
					window.location.reload();
				});
			});
		});
	});
});
