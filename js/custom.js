// preloader
$(window).load(function(){
  $("#preloader").delay(1000).fadeOut(2000)
});
//preloader end

// banner part js strt
$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:true,
    arrows:false,
    speed:1000,
  });
// banner part js strt

// aos strt
  AOS.init();
// aos end
// backtotop
$(".backtotop i").click(function(){
  $('html,body') .animate ({
    scrollTop:0
  },1000) 
})

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()

  if(scrolling > 20){
    $(".backtotop i").fadeIn(500)
  }else{
    $(".backtotop i").fadeOut(500)
  }

})
// back to otp end


// typed strt
$(function(){
	$(".typed").typed({
		strings: ["beautiful ", "design", "People"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
// typed end


	
	