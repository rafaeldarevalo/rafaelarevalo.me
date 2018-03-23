jQuery(document).ready(function($) {



	$('.head').parallax("80%", 0.1);
	$('.aboutMe').parallax("50%", 0.1);
	$('.iDo').parallax("50%", 0.1);
	$('.services').parallax("50%", 0.1);
	$('.portfolio').parallax("50%", 0.2);
	$('.contactUs').parallax("20%", 0.1);



	$(".portfolioMin a").on('click', function() {

		$(".portfolioFull img").hide();
		$(".portfolioFull").slideDown();
		var imgData = $(this).attr("data-id");
		var Name = $(this).attr("data-name");
		var Todo = $(this).attr("data-todo");


		$("."+imgData).fadeIn();
		$(".js-name").html(Name);
		$(".js-todo").html(Todo);




	});
	$(".js-FullClose").on('click', function(event) {
		event.preventDefault();
		$(".portfolioFull").slideUp();

	});

	$(".js-menu").on('click', function(event) {
		event.preventDefault();
		// TweenMax.to(".js-menuWrap", 2, {right:0});
		$(".js-menuWrap").animate({
			top: '0'
		});
		TweenMax.staggerFrom(".js-menuWrap ul li", 0.5, {
			opacity: 0,

			y: 400,
			delay: 0.5,
			ease: Expo.easeOut
		}, 0.2);

	});

	$(".menuClose, .js-menuWrap ul li a").on('click', function(event) {
		event.preventDefault();



		$(".js-menuWrap").animate({
			top: '-700px'
		});




	});


});


$(function(){

     $('.js-menuWrap a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});









// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic();


   // Create Animation for 0.5s
  var tween2 = TweenMax.staggerFrom('.thum', 0.5, {top: 400}, 0.1);
  var scene2 = new ScrollScene({triggerElement: '.portfolio', offset: -100, duration: 800})
  .setTween(tween2)
  .addTo(scrollMagicController);








});











// TweenMax.to(target, duration, {vars} );

//TweenMax.to(".js-globy", 2, {left:600});
//TweenMax.to(".js-globy", 2, {x:600, y:200, rotation:360, scale:2});
