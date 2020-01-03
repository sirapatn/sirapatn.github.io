$(window).on("load", function () { // makes sure the whole site is loaded
  //preloader
  $("#status").fadeOut(); // will first fade out the loading animation
  $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
});

AOS.init({
  duration: 800,
  easing: 'slide',
  once: false
});

$((function ($) {
  "use strict";

  const siteConfetti = () => {
    confetti.start()
    setTimeout(() => {
      confetti.stop()
    }, 100000) // 100 seconds
  }

  const siteCarousel = function () {
    if ($('.nonloop-block-13').length > 0) {
      $('.nonloop-block-13').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 20,
        smartSpeed: 1000,
        autoplay: 500,
        nav: false,
        dots: true,
        responsive: {
          600: {
            margin: 20,
            items: 2
          },
          1000: {
            margin: 20,
            stagePadding: 0,
            items: 4
          }
        }
      });
      $('.custom-next').click(function (e) {
        e.preventDefault();
        $('.nonloop-block-13').trigger('next.owl.carousel');
      })
      $('.custom-prev').click(function (e) {
        e.preventDefault();
        $('.nonloop-block-13').trigger('prev.owl.carousel');
      })


    }

    $('.slide-one-item').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1500,
      autoplay: 500,
      pauseOnHover: false,
      dots: true,
      nav: true,
      navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    if ($('.owl-all').length > 0) {
      $('.owl-all').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: 500,
        nav: false,
        dots: true,
        touchDrag: true,
        mouseDrag: true,
        smartSpeed: 1000,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        responsive: {
          768: {
            margin: 30,
            nav: false,
            responsiveRefreshRate: 10,
            items: 1
          },
          992: {
            margin: 30,
            stagePadding: 0,
            nav: false,
            responsiveRefreshRate: 10,
            touchDrag: false,
            mouseDrag: false,
            items: 3
          },
          1200: {
            margin: 30,
            stagePadding: 0,
            nav: false,
            responsiveRefreshRate: 10,
            touchDrag: false,
            mouseDrag: false,
            items: 3
          }
        }
      });
    }

  };

  siteCarousel();
  siteConfetti();

}));