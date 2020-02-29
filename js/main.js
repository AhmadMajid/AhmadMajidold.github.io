(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       
              
        $(".brand-slider").owlCarousel({
            items:5,
            nav:true,
            navText:['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            dot:false,
            loop:true,
            margin:20,
            autoplay:true,
            autoplayTimeout:2000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:3,
                   
                },
                768:{
                    items:6,
                   
                },
                1000:{
                    items:8,
                   
                },
                1200:{
                    items:10,
                   
                }
            }
            
          
        });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	