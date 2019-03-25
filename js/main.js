$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/


  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();


  //------- video popup -------//
  $(".hero-banner__video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.featured-carousel').length) {
        $('.featured-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            nav: true,
            dots: false,
            slideSpeed: 300,
            paginationSpeed: 500,
            navText : ["<div class='left-arrow'><i class='ti-angle-left'></i></div>","<div class='right-arrow'><i class='ti-angle-right'></i></div>"],
            responsive: {
                768: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            }
        })
    }



    /*-------------------------------------------------------------------------------
	  featured slider
	-------------------------------------------------------------------------------*/
    if ($('.hero-carousel').length) {
        $('.hero-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            nav: false,
            dots: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            autoplay:true,
            autoplayTimeout:5000,
            animateIn: 'flipInY',
        })
    }



  
});


