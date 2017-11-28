$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();

      if (scrollTop > 150) {
          $('#header').addClass('header-color')
          $('.top-right').addClass('white')
      }
      else {
          $('#header').removeClass('header-color')
          $('.top-right').removeClass('white')
      }
});
