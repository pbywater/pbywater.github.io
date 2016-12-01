$(function() {
	$('body').hide();
    $('body').fadeIn(1000);

});

$(window).scroll(function() {
	var imageOne = $('#image1');
	var imageTwo = $('#image2');
	var imageThree = $('#image3');
	var imageFour = $('#image4');
	var imageFive = $('#image5');
	var imageSix = $('#image6');
	var text = $('.text');
	var mobileText = $('.mobile-text');


	 // var scrollTop = image.offset();
	 scrollTop = imageOne.offset().top;
	 windowTop = $(window).scrollTop();
     var windowHeight = $(window).height(); 
     var scrollToTop = (scrollTop - windowTop); 
     imageOne.css({'transform': 'translate(' + windowTop/6 + 'px' + ',' + windowTop/6 + 'px'});
     // imageOne.css({'transform': 'translateX(' + windowTop/5 + 'px'});
     imageTwo.css({'transform': 'translateY(' + windowTop/2 + 'px'});
     imageThree.css({'transform': 'translateY(' + windowTop/9 + 'px'});
     imageFour.css({'transform': 'translateY(' + windowTop/7 + 'px'});
     imageFive.css({'transform': 'translate(' + windowTop/20 + 'px' + ',' + windowTop/20 + 'px'});
     imageSix.css({'transform': 'translate(' + windowTop/-20 + 'px' + ',' + windowTop/-20 + 'px'});
     text.css({'transform': 'translateX(' + windowTop/3 + 'px'});
     text.fadeOut('5000');
     mobileText.fadeOut('5000');

});

// $(document).click(function() {
// 	$('#image1, #image2, #image3, #image4, #image5, #image6').removeClass('enlarge, enlarge2, enlarge3, enlarge4, enlarge5, enlarge6')

// });

//Enlarge on click and scroll to top

$('#image1, #image2, #image3, #image4, #image5, #image6').on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0 ,
  }, scroll_top_duration
  );
});



function img1() {

 $('.header').toggleClass('hide');
  $('.image').toggleClass('hide');
  $('.text, .text p').toggleClass('hide');
  $('#image1').removeClass('hide').toggleClass('enlarge');
  $('.arrow-left').toggleClass('hide');
  $('.arrow-right').toggleClass('hide');
  $('.background-icon').toggleClass('hide');
    $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
}

$( "#image1" ).click(function () {
 img1();
});

// $('.arrow-right').click(function() {
// if($('#image1').hasClass('enlarge')) {
//            console.log('image1 is active');
// 	$('#image1').fadeOut();
// $('#image2').addClass('enlarge2');
// $('#image2').fadeIn();
// }
// else if($('#image2').hasClass('enlarge2')) {
//            console.log('image2 is active');
// 	$('#image2').fadeOut();
// $('#image3').addClass('enlarge3');
// $('#image3').fadeIn();
// }
// });

// .next

// .jquery.each

// var image1 = document.getElementById("#image1");
// var image2 = document.getElementById("#image2");
// var arrowRight = document.getElementById(".arrow-right");

// arrowRight.onclick=function(){
// 	image1
// };
 
function img2() {
  $('.header').toggleClass('hide');
  $('.image').toggleClass('hide');
  $('.text, .text p').toggleClass('hide');
  $('#image2').removeClass('hide').toggleClass('enlarge');
  $('.arrow-left').toggleClass('hide');
  $('.arrow-right').toggleClass('hide');
  $('.background-icon').toggleClass('hide');
  $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');

}

$( "#image2" ).click(function () {
 img2();
});

function img3() {
  $('.header').toggleClass('hide');
  $('.image').toggleClass('hide');
  $('.text, .text p').toggleClass('hide');
  $('#image3').removeClass('hide').toggleClass('enlarge');
  $('.arrow-left').toggleClass('hide');
  $('.arrow-right').toggleClass('hide');
  $('.background-icon').toggleClass('hide');
   $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
}

$( "#image3" ).click(function () {
 img3();
});

function img4() {
  $('.header').toggleClass('hide');
  $('.image').toggleClass('hide');
  $('.text, .text p').toggleClass('hide');
  $('#image4').removeClass('hide').toggleClass('enlarge');
  $('.arrow-left').toggleClass('hide');
  $('.arrow-right').toggleClass('hide');
  $('.background-icon').toggleClass('hide');
   $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
}

$( "#image4" ).click(function () {
 img4();
});

function img5() {
  $('.header').toggleClass('hide');
  $('.image').toggleClass('hide');
  $('.text, .text p').toggleClass('hide');
  $('#image5').removeClass('hide').toggleClass('enlarge');
  $('.arrow-left').toggleClass('hide');
  $('.arrow-right').toggleClass('hide');
  $('.background-icon').toggleClass('hide');
  $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
}

$( "#image5" ).click(function () {
 img5();
});

function img6() {
  $('.header').toggleClass('hide');
  $('.image').toggleClass('hide');
  $('.text, .text p').toggleClass('hide');
  $('#image6').removeClass('hide').toggleClass('enlarge');
  $('.arrow-left').toggleClass('hide');
  $('.arrow-right').toggleClass('hide');
  $('.background-icon').toggleClass('hide');
  $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
}

$( "#image6" ).click(function () {
 img6();
});


// BACK TO TOP BUTTON

// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 100,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 2000, //1200px??
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.cd-top');

//hide or show the "back to top" link
$(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) { 
    $back_to_top.addClass('cd-fade-out');
  }
});

//smooth scroll to top
$back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0 ,
  }, scroll_top_duration
  );
});
// END OF BACK TO TOP BUTTON

       document.getElementById("audio").loop = true;
       document.getElementById("audio1").loop = true;
       document.getElementById("audio2").loop = true;
       document.getElementById("audio3").loop = true;
       document.getElementById("audio4").loop = true;
       document.getElementById("audio5").loop = true;
       document.getElementById("popSound");
  

//pop

  function pop(){
       popSound.play();
       }

//bubbles

$( "#bubbles" ).click(function() {
	pop();
	$('#bubbles').fadeOut(100);
	 $('#pop.background-icon.hide').fadeIn(200);
 $('#pop.background-icon.hide').removeClass('hide');
 $('#pop').fadeOut(100);
});

$( "#bubbles2" ).click(function() {
	pop();
	$('#bubbles2').fadeOut(100);
	 $('#pop2.background-icon.hide').fadeIn(200);
 $('#pop2.background-icon.hide').removeClass('hide');
 $('#pop2').fadeOut(100);
});

$( "#bubbles3" ).click(function() {
	pop();
	$('#bubbles3').fadeOut(100);
	 $('#pop3.background-icon.hide').fadeIn(200);
 $('#pop3.background-icon.hide').removeClass('hide');
 $('#pop3').fadeOut(100);
});


  //sound

  function play(){
       audio.play();
       }
         function pause(){
       audio.pause();
       }

//sound1

 function play1(){
       audio1.play();
       }
         function pause1(){
       audio1.pause();
       }

//sound2

  function play2(){
       audio2.play();
       }

  function pause2(){
       audio2.pause();
       }

//sound3

  function play3(){
       audio3.play();
       }

  function pause3(){
       audio3.pause();
       }

 //sound4

  function play4(){
       audio4.play();
       }

  function pause4(){
       audio4.pause();
       }


//sound5
   
  function play5(){
       audio5.play();
       }

  function pause5(){
       audio5.pause();
       }

       //slider prep

       function img1Slide() {

  $('#image2, #image3, #image4, #image5, #image6').removeClass('enlarge').addClass('hide');
  $('#image1').removeClass('hide').addClass('enlarge') ;
  console.log('adding enlarge to image1');
    $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');

if ( $(window).width() < 739) {      
  function mobSound1() {
play();
pause1();
pause2();
pause3();
pause4();
pause5();
  }
mobSound1();
$('.mute').removeClass('hide');
}

}

       function img2Slide() {

  $('#image1, #image3, #image4, #image5, #image6').removeClass('enlarge').addClass('hide');
  $('#image2').removeClass('hide').addClass('enlarge');
    $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
if ( $(window).width() < 739) {      
  function mobSound2() {
pause();
play1();
pause2();
pause3();
pause4();
pause5();
  }
mobSound2();
$('.mute').removeClass('hide');
}

}

      function img3Slide() {

  $('#image2, #image1, #image4, #image5, #image6').removeClass('enlarge').addClass('hide');
  $('#image3').removeClass('hide').addClass('enlarge');
    $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
if ( $(window).width() < 739) {      
  function mobSound2() {
pause();
pause1();
play2();
pause3();
pause4();
pause5();
  }
mobSound2();
$('.mute').removeClass('hide');
}
}

      function img4Slide() {

  $('#image2, #image3, #image1, #image5, #image6').removeClass('enlarge').addClass('hide');
  $('#image4').removeClass('hide').addClass('enlarge');
    $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');

if ( $(window).width() < 739) {      
  function mobSound3() {
pause();
pause1();
pause2();
play3();
pause4();
pause5();
  }
mobSound3();
$('.mute').removeClass('hide');
}
}

      function img5Slide() {

  $('#image2, #image3, #image4, #image1, #image6').removeClass('enlarge').addClass('hide');
  $('#image5').removeClass('hide').addClass('enlarge');
    $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
if ( $(window).width() < 739) {      
  function mobSound4() {
pause();
pause1();
pause2();
pause3();
play4();
pause5();
  }
mobSound4();
$('.mute').removeClass('hide');
}
}

      function img6Slide() {

  $('#image2, #image3, #image4, #image5, #image1').removeClass('enlarge').addClass('hide');
  $('#image6').removeClass('hide').addClass('enlarge');
    $('#pop.background-icon, #pop2.background-icon, #pop3.background-icon').addClass('hide');
if ( $(window).width() < 739) {      
  function mobSound5() {
pause();
pause1();
pause2();
pause3();
pause4();
play5();
  }
mobSound5();
$('.mute').removeClass('hide');
}
}


       //slider


       var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      // slides[i].style.display = "none"; 
      // console.log('iteration');
      // console.log(slides[i]);
  // }
  
  if (slideIndex-1 == 0 && $('.image').hasClass('enlarge')) {
  	console.log('change to first image');
  	img1Slide();
  	 $('#wavesBig, #raindrops, #dropsil, #water, #waves, #drop, #drop2').addClass('hide');
  }

   if (slideIndex-1 == 1) {
  	console.log('second image');
  	img2Slide();
  	 $('#wavesBig, #raindrops, #dropsil, #water, #waves, #drop, #drop2').addClass('hide');
  }

    else if (slideIndex-1 == 2) {
  	console.log('third image');
  	img3Slide();
  	 $('#wavesBig, #raindrops, #dropsil, #water, #waves, #drop, #drop2').addClass('hide');
  }

      else if (slideIndex-1 == 3) {
  	console.log('fourth image');
  	img4Slide();
  	 $('#wavesBig, #raindrops, #dropsil, #water, #waves, #drop, #drop2').addClass('hide');
  }

       else if (slideIndex-1 == 4) {
  	console.log('fifth image');
  	img5Slide();
  	 $('#wavesBig, #raindrops, #dropsil, #water, #waves, #drop, #drop2').addClass('hide');
  }

     else if (slideIndex-1 == 5) {
  	console.log('sixth image');
  	img6Slide();
  }
}
}


       //responsive

if ( $(window).width() < 739) {      
  $('.text').hide();
  $('.mobile-text').removeClass('hide');
  $('.background-icon').addClass('hide');
  $('#wavesBig, #raindrops, #dropsil, #water, #waves, #drop, #drop2').addClass('hide');
  $('#bubbles, #bubbles2, #bubbles3').removeClass('hide');
  $( "#image1, #image2, #image3, #image4, #image5, #image6" ).click(function() {
  $('.mobile-text').toggleClass('hide');

});

// $('.mute').removeClass('hide');

$( ".mute" ).click(function () {
 pause();
pause1();
pause2();
pause3();
pause4();
pause5();
});

$( "#bubbles" ).click(function() {
	pop();
	$('#bubbles').fadeOut(100);
	 $('#pop.background-icon.hide').fadeIn(200);
 $('#pop.background-icon.hide').removeClass('hide');
 $('#pop').fadeOut(100);
});

$( "#bubbles2" ).click(function() {
	pop();
	$('#bubbles2').fadeOut(100);
	 $('#pop2.background-icon.hide').fadeIn(200);
 $('#pop2.background-icon.hide').removeClass('hide');
 $('#pop2').fadeOut(100);
});

$( "#bubbles3" ).click(function() {
	pop();
	$('#bubbles3').fadeOut(100);
	 $('#pop3.background-icon.hide').fadeIn(200);
 $('#pop3.background-icon.hide').removeClass('hide');
 $('#pop3').fadeOut(100);
});

} 


