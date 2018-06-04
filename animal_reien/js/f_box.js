

$(function() {

	$("a#fb1").fancybox();

	$("a#fb2").fancybox({
		'overlayShow'	: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'
	});

	$("a#fb3").fancybox({
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'
	});

	$("a#fb4").fancybox({
		'opacity'		: true,
		'overlayShow'	: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'none'
	});

	$("a#fb5").fancybox();

	$("a#fb6").fancybox({
		'titlePosition'	: 'outside',
		'overlayColor'	: '#000',
		'overlayOpacity': 0.9
	});

	$("a#fb7").fancybox({
		'titlePosition'	: 'inside'
	});

	$("a#fb8").fancybox({
		'titlePosition'	: 'over'
	});

	$("a[rel=fb_group]").fancybox({
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'/*,
		'titlePosition' : 'over',
		'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}*/
	});

			/*
			*   Examples - various
			*/

	$("#various1").fancybox({
		'titlePosition'	: 'inside',
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'
	});

	$("#various2").fancybox();

	$("#various3").fancybox({
		'width'		: '75%',
		'height'	: '75%',
		'autoScale'	: false,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none',
		'type'		: 'iframe'
	});

	$("#various4").fancybox({
		'padding'	: 0,
		'autoScale'	: false,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none'
	});
});
