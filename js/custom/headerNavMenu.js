$(document).ready(function(){

  $('.nav-bar__toggle').on('click' , function(){
    $(this).toggleClass("on");
    $(".nav-bar__list").slideToggle(300 , function() {
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
    $('#carousel-example-generic').slideToggle();
    return false;
  })

})
