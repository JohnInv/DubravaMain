$(document).ready(function(){

    var dropDown;

   $('ul.products-nav__menu li i.fa.fa-arrow-down').on('click' , function(){
       dropDown = $(this).next().next();
       $('ul.products-nav__menu li ul.drop-down').fadeOut(250);
       dropDown.bind('mouseleave' , hideMenu);
       dropDown.stop().fadeToggle(250);
   });

    function hideMenu() {
        $('ul.drop-down').fadeOut();
    }

    $('.products-toggle--wrap a.productMenu__toggle').on('click' , function(){
      $(this).toggleClass("on");
      $(this).parent().next().slideToggle(300 , function() {
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
      $('#carousel-example-generic').slideToggle();
      return false;
    })

});