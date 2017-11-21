//HAMBURGUER MOBILE NAV

$(document).ready(function () {
    
var hamburger = document.getElementById('hamburger');
var content = document.getElementById('nav-content');
var navigation = document.getElementById('h-navigation');
// On click

$('#hamburger, #nav-content a').click (function () {

    var aux = hamburger.classList.toggle('is-active');

    if (aux) {
        content.classList.add('is-visible');
        content.style.visibility = 'visible';
        navigation.classList.add('drop');
        
      

    } else {
        content.classList.remove('is-visible');
        content.style.visibility = 'hidden';
        navigation.classList.remove('drop');

    }

});

});

//PARALAX

$(document).ready(function () {
    $('.parallax').parallax();
 });
       
   
       
//TOGGLE PUBLICAÇÕES

   $(document).ready(function () { 
// set content on click
$('.btn-mod-border-pubs').click(function (e) {
    e.preventDefault();
    setContent($(this));
});

    
// set content on load
$('.btn-mod-border-pubs.btn-active').length && setContent($('.btn-mod-border-pubs.btn-active'));

function setContent($el) {
    $('.btn-mod-border-pubs').removeClass('btn-active');
    $('.toggle-pubs').hide();

    $el.addClass('btn-active');
    $($el.data('rel')).show();
};
        $('.button-collapse').sideNav();
    
     });



//TOGGLE ARQUIVO

  $(document).ready(function () {    
// set content on click
$('.btn-mod-border-arq').click(function (e) {
    e.preventDefault();
    setContent($(this));
});

    
// set content on load
$('.btn-mod-border-arq.btn-active').length && setContent($('.btn-mod-border-arq.btn-active'));

function setContent($el) {
    $('.btn-mod-border-arq').removeClass('btn-active');
    $('.toggle-arq').hide();

    $el.addClass('btn-active');
    $($el.data('rel')).show();
};
        $('.button-collapse').sideNav();  
    
    
        });   




         




//HIDE MENU ONSCROLL DOWN

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('h-nav-up');
        
       
         
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('h-nav-up').addClass('h-nav-down');
        }
    }
    
    lastScrollTop = st;
}

//SLICK INITIALIZE

$(document).ready(function(){
  $('.item-slider').slick({
      infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
  });
});



