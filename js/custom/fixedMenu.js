$(document).ready(function() {

    var navOffset = $('nav.products-nav').offset().top;

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();

        if(scrollPos >= navOffset) {
           $('#fixedMenu').addClass("fixed")
        } else {
           $('#fixedMenu').removeClass("fixed");
        }
    });


    $('.fixed-menu__icons a.search').on('click' , function() {
      $('ul.fixed-menu__products-list').slideToggle(300);
      $('.search-input').slideToggle(300);
    });

});
