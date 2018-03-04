// main.js file
// Author: Andrew Narolskii
// Email: kickerwrk@gmail.com
// 2018


// Плавный скролл
$(document).ready(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.selector == '#modality') return;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 50
        }, 1000);
        return false;
      }
    }
  });


// Owl Каруселька
  var owl = $(".slides-container");
  owl.owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    navText: [$('.prevOne'), $('.nextOne')],
    mouseDrag: false,
    fadeIn: true,
    fadeOut: true,
    URLhashListener: true,
    merge: false,
    startPosition: 'URLHash'
  });


  // Имитация клика
$('.customNext').click(function () {
$('.nextOne').click();
});
$('.customPrev').click(function () {
$('.prevOne').click()
});


  // Смена активного дота
  owl.on('changed.owl.carousel', function(property) {

    var current = property.item.index;
    var src = $(property.target).find(".owl-item").eq(current).find(".slide").attr('data-hash');
    $('.slide-link').removeClass('acting');
    $(".slides-nav .slide-link").each(function() {
      var slideRef = $(this).attr('href');
      var slideRefSub = slideRef.substring(1);
      if (slideRefSub == src) {
        $(this).addClass('acting');
      }
    });
  });
});
