$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();

      if (scrollTop > 150) {
        $('.top-right').addClass('white')
          $('#header').addClass('header-color', 500)
      }
      else {
          $('.top-right').removeClass('white')
          $('#header').removeClass('header-color', 500)
      }
});
