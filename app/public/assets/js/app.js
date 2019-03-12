'use strict';

$(document).ready(() => {
	$('.sidenav').sidenav({
		menuWidth: 300,
		edge: 'left',
		closeOnClick: false,
		draggable: true,
	});

	$('.materialboxed').materialbox();
});
