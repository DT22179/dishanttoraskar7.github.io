$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 2500,
		pagination: false
	});

	var typedName = new Typed(".typedName", {
		strings: ["Dishant Toraskar"],
		typeSpeed: 70,
		startDelay: 1000,
		showCursor: false
	});

	var typedSub = new Typed(".typedSub", {
		strings: ["Software Developer", "Web Developer", "Student"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinish = false;

	$(window).scroll(function(){

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 250){
			$('.chart').easyPieChart({
			   easing: 'easeInOut',
			   barColor: '#fff',
			   trackColor: false,
			   scaleColor: false,
			   lineWidth: 4,
			   size: 152,
			   onStep: function(from, to, percent){
			   		$(this.el).find('.percent').text(Math.round(percent));
			   }
			});
		}

		if(!countUpFinish && window.pageYOffset > skillsTopOffset - $(window).height() + 250){

			$(".counter").each(function(){
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinish = true;

		}

	});

});




