 $(document).ready(function() {

$(function() {
    $('body').removeClass('fade-out');
});


// 	$(window).scroll(function() {
// 	if ($(this).scrollTop() > 1){  
// 	    $('header').addClass("sticky");
// 	  }else{
// 	    $('header').removeClass("sticky");
// 	  }
// 	})





 $('.popupInfo').hide()

$('#btn').click(function() {
    $('.popupInfo').toggle();
});
$(".closingInfo").click(function(){
  $(".popupInfo").hide()
})

$('.alex').hide()
$('#btn3').click(function(){
  $('.alex').toggle();
})

$(".closealex").click(function(){
  $('.alex, .Al').hide()
})

$(".Al ").hide()
$('#btn3').click(function(){
  $('.Al').toggle();
})



$('.brad, .picBrad,.picBrad2, .picBrad3, .picBrad4').hide()
$('#btn3').click(function(){
  $('.brad, .picBrad,.picBrad2, .picBrad3, .picBrad4').toggle();
})

$(".closebrad").click(function(){
  $('.brad, .picBrad,.picBrad2, .picBrad3, .picBrad4').hide()
})



//////////////////////////// PROJECTS VIEW MAIN PAGE /////////////////


//1

// $("#madeIn").hover(function () {
//   $("html").css({
//     "background": 'url("images/2.png")',
//     "background-size": "100%",
//     "background-repeat": "no-repeat",
//     "opacity": "0,5"
//   })
//   $(".nav, .footer").css("visibility", "hidden");
// });

// $("#madeIn").mouseout(function () {
//   $("html").css("background", "white" )
//   $(".nav, .footer").css("visibility", "visible");
// });


// //2

// $("#Omen").hover(function () {
//   $("html").css({
//     "background": 'url("images/3.png")',
//     "background-size": "100%",
//     "opacity": "0,5"
//   })
//   $(".nav, .footer").css("visibility", "hidden");
// });

// $("#Omen").mouseout(function () {
//   $("html").css("background", "white" )
//   $(".nav, .footer").css("visibility", "visible");
// });

window.sr = ScrollReveal({ reset: true });
sr.reveal('#proj3');
sr.reveal('#proj4');
sr.reveal('#proj5');
sr.reveal('#proj6');
sr.reveal('#proj7');
sr.reveal('#proj8');
sr.reveal('#proj9');

$('.arrow').click(function(){
  $('.projectsss').slideUp();
})

///////////////////////////////// PROMPTER BOTTOM PAGE ///////////////////////////////// 


$(function() {
  $('.marquee').marquee({
    duration: 9000,
    startVisible: true,
    duplicated: true
  });
});

//POP UP POST IT CODE
$('#prebtn').click(function(){
  $('.popup').toggle();
})
$(".closebtn").click(function(){
	$(".popup").hide()
})

$("#btn2").click(function(){
  $(".popup, .popupInfo, .alex, .Al, .brad, .picBrad,.picBrad2, .picBrad3, .picBrad4").hide()
})


$( function() {
    $( ".dragme" ).draggable();
  } );
$( function() {
    $( ".dragme" ).draggable();
  } );

$('.projectsss').hide()

$('#proj1').click(function(){
  $('.projectsss').slideDown();
})





 })

