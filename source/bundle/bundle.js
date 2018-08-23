import '../components/scss/style.scss';

import '../components/js/bootstrap.min'

import 'slick-carousel';

import '../components/js/map';

import fancybox from '../components/js/jquery.fancybox.min.js';

import 'wowjs';

const WOW = require('wowjs');
window.wow = new WOW.WOW({

})
	
window.wow.init();

var slickPartners = $('.slick-partners'),
slickBanner = $('.slick-banner'),
slickFor = $('.slick-for'),
slickNav = $('.slick-nav');

slickBanner.slick({
	infinite: true,
	slidesToShow: 1,
	fade: true,
	slidesToScroll: 1
})

slickPartners.slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

slickNav.slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slick-for',
	focusOnSelect: true,
	dots: false,
	arrows: false
})

slickFor.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	swipe: false,
	asNavFor: '.slick-nav',
	dots: false,
	arrows: false
});

// ---------GET YEAR-----------
var year = new Date(),
today = year.getFullYear(),
yearToday = document.getElementById('year');
yearToday.innerHTML = ('© ' + today + '. ')

// ------SCROLLSPY----------

$('body').scrollspy({target: "#navbar", offset: 50});

$("#navbar a").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  }
});

// -------------BACK-TO-TOP---------------
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});

// ---------ANIMIATE TO FOOTER-------------
$(document).ready(function(){
    $('#call').click( function() {
		var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
	    return false;
    });
});

// ----------ADAPTIVE------
function ShowMenu() {
  $('#hamburger, #close').click(function() {
    $('#hamburger').toggleClass('opened');
    $('#navbar').toggleClass('opened');
  });
  
}
ShowMenu();

function changeTablet() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 991px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('.nav-tabs > li > a').click(function(event) {
				event.preventDefault();
				var id = $('.tab-content'),
				top = $(id).offset().top - 100;
				$('body, html').animate({scrollTop: top}, 600);
			});
		}	
	}
}
changeTablet();

function changeMobile() {
  if(matchMedia) {
    var screen = window.matchMedia('(max-width: 768px)');
    screen.addListener(changes);
    changes(screen);
  }
  function changes(screen) {
    if(screen.matches) {
		$('.header__contacts').appendTo('.header__menu');
		$('#call').appendTo('.header__left');
		$('#hamburger').appendTo('.header__left');
		$('#navbar > ul > li > a').click(function() {
	        $('#hamburger').toggleClass('opened');
	        $('#navbar').toggleClass('opened');
      });
    }
    else {
    	$('.header__contacts').appendTo('.header__right');
    	$('#call').appendTo('.header__right');
    }
  };
};
changeMobile();