// Navbar

$(document).ready(() => {
    $('.navbar_show_btn').click(() => {
        $('.navbar_collapse').addClass('showNavbar');
    })

    $('.navbar_hide_btn').click(() => {
        $('.navbar_collapse').removeClass('showNavbar');
    });

    // Slick Slider
    $('.hero_slider').slick({
        isFinite: true,
        slidesToShow: 1,
        dots: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // stopping transition
    let resizeTimer;
    $(window).on('resize', () => {
        $(document.body).addClass('resize_transition_stopper')
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize_transition_stopper');
        }), 400;
    });

}); 

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}