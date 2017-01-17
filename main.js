/*scoll to the top*/
var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

/*make scroll down animation from nav bar*/
//for logo button
$('#logoButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#home').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for home button
$('#homeButton').click(function() {
  //console.log('123'); //signal for testing
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#home').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for gallery button
$('#galleryButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#makeupGallery').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for download button on nav bar 
$('#downloadButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#makeupDownload').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for feature button
$('#featuresButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#makeupFeatures').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for faq button
$('#faqButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#makeupFaq').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for contact button
  $('#contactButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#makeupContact').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});

		

	// function delay (URL) {
	//     setTimeout( function() { window.location = URL }, 500 );
	// }

    $("#nav ul li a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 300, function(){
   
           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = this.hash;
         });

    });
(function($) {
    "use strict";
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    /*$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });*/

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

})(jQuery); // End of use strict
