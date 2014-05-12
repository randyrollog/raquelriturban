$(document).ready(function(){
// 	// $('#number_wrapper').flowtype({
// 	// 	minimum   : 80,
// 	// 	maximum   : 215,
// 	// 	minFont   : 18,
// 	// 	maxFont   : 80,
// 	// 	fontRatio : 10
// 	// });

// 	//define text
//   var text = '"Buying my first home was easy. I\'m so glad I had such a professional to guide me through this process. I finally have my dream home. Thanks Raquel!" -Linda Bayes';
//   //text is split up to letters
// 	$.each(text.split(''), function(i, letter){
//     //we add 100*i ms delay to each letter 
//     setTimeout(function(){
//       //we add the letter to the container
//       $('#typewriter').html($('#typewriter').html() + letter);
//     }, 50*i);
//   });

// 	// var map = L.mapbox.map('map', 'randyrlee.i1aeehlj');

// 	// function copyToClipboard(text) {
// 	// 	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
// 	// }

	$(window).bind('scroll',function(e){
	  parallaxScroll();
	});
	 
	function parallaxScroll(){
	  var scrolled = $(window).scrollTop();
	  $('#carousel_wrapper').css('top',(-40+(scrolled*.25))+'px');
	  // $('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	  // $('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
	}

	$(window).load(function() {
    $('.flexslider').flexslider();
  });


});

