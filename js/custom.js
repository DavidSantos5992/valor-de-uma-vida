(function ($) {
 "use strict";
$(document).ready(function(){

		/*
		Mean Menu Responsive
		============================*/		
        jQuery('nav#main-menu').meanmenu();	

		/*
		Founder Slide Crousel
		============================*/ 	
		  $(".all-founder").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :1,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTablet: [767,1],
			itemsMobile : [479,1],
		  }); 		
		/*
		Project Details Thumb Slide Crousel
		============================*/ 	
		  $(".project-details-thumb").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:false, 
			items :1,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTablet: [767,1],
			itemsMobile : [479,1],
		  }); 		
		/*
		Testimonial Crousel
		============================*/ 	
		  $(".all-testimonial").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			margin:30,
			items :2,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				1000:{
					items:2
				}
			}			
		  });		
		/*
		Related Product Crousel
		============================*/ 	
		  $(".all-related-product").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:false,
			margin:15,			
			items :3,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				1000:{
					items:3
				}
			}			
		  }); 			
		/*
		Donor Testimonial Crousel
		============================*/ 	
		  $(".donor-testimonial").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :1,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},				
				1000:{
					items:1
				}
			}			
		  }); 		
		/*
		Patner Crousel
		============================*/ 	
		  $(".all-patner").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :4,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
			
				0:{
					items:2
				},				
				600:{
					items:2
				},
				768:{
					items:2
				},				
				992:{
					items:4
				},				
				1000:{
					items:4
				}
			}
		  }); 		
		/*
		Product Details Thumb Crousel
		============================*/ 	
		  $(".all-product-thumb").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:false, 
			items :1,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
			
				0:{
					items:1
				},				
				600:{
					items:1
				},
				768:{
					items:1
				},				
				992:{
					items:1
				},				
				1000:{
					items:1
				}
			}
		  }); 					
		/*
		Slider Crousel
		============================*/ 
		$(".all-slide").owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: true,
            touchDrag: true,
        });
        
        $(".all-slide").on("translate.owl.carousel", function(){
            $(".slider-inner *").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-inner *").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text ul").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text ul").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".all-slide").on("translated.owl.carousel", function(){
            $(".slider-inner *").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-inner *").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text ul").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text ul").addClass("animated fadeInDown").css("opacity", "1");
        });
		/*
		Price Range Js
		============================*/					
		$( "#price_id" ).slider({
			range: true,
			min: 0,
			max: 100,
			values: [ 10, 90 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#price_id" ).slider( "values", 0 ) +
			" - $" + $( "#price_id" ).slider( "values", 1 ) );		
		/*
		scrollUp
		============================*/	
		$.scrollUp({
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});	
		/*
		Counter Js
		============================*/ 
        $('.counter').counterUp({
            delay: 10,
            time: 1000			
        });
			
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });		
		/*
		Vedio Magnific Popup
		============================*/ 		
        $('.vedio-play').magnificPopup({type: 'video'});	 						
		/*
		Project Gallery Js
		============================*/			
		$(".filtr-container").isotope({
		itemSelector: '.filtr-item',
		layoutMode: 'fitRows',
		});
		$('ul.simplefilter li').on("click",function(){
		$("ul.simplefilter li").removeClass("active");
		$(this).addClass("active");
		 
		var selector = $(this).attr('data-filter');
		$(".filtr-container").isotope({
		filter: selector,
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false,
		}
		});
		return false;
		});
		/*
		 Count Down Timer Js
		============================*/	
		 $("#countdown_time")
		  .countdown("2018/02/01", function(event) {
			$(this).text(
			  event.strftime('%D:%H:%S')
			);
		  });
		/*
		Blog Grid Js
		============================*/	 
		$('.blog-grid-filter').on( 'click', 'li', function() {
		$("li").removeClass("active");
		$(this).addClass("active");			
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});				
		var $grid = $('.blog-grid').isotope({
		  itemSelector: '.blog-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: '.blog-item'
		  }
		})
		
		/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});			
	});	
})(jQuery);

