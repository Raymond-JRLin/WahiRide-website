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
//for feature button
$('#featuresButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#features').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for how-it-works button
$('#workButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#how-it-works').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
//for contact button
$('#contactButton').click(function() {
  //console.log('123');
  $('html, body').delay() //wait 5 seconds
    .animate({
      //animate jQuery's custom "scrollTop" style
      //grab the value as the offset of #second from the top of the page
      'scrollTop': $('#contact').offset().top
    }, 500); //animate over 300ms, change this to however long you want it to animate for
});
