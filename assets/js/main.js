$(window).on('scroll', function () {

    var scrollTop = $(window).scrollTop();

      if (scrollTop > 150) {
        $('.top-right').addClass('white')
          $('#header').addClass('header-color', 500)
          $('#contactbutton').addClass('button-outline', 500)
      }
      else {
          $('.top-right').removeClass('white')
          $('#header').removeClass('header-color', 500)
          $('#contactbutton').removeClass('button-outline', 500)



      }
});
