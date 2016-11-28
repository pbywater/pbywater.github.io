$(function() {
	$('body').hide();
    $('body').fadeIn(1000);

});

// $(window).scroll(function() {
// 	var image = $('#image3');
// 	 var scrollTop = image.offset();
// 	 scrollTop = scrollTop.top;
//      var windowHeight = $(window).height(); 
//      var scrollToTop = windowHeight - scrollTop; 
//     console.log(scrollTop);
    

// })

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

// $('#image').onClick()

