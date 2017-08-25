$(document).ready(function(){

    $('#hidden-filter').on('click' , function() {
       $('section.filters').slideToggle();
    });

    $('span.more').on('click' , function() {
      $('.intro__info span.hidden').slideToggle(300);
    })

    $('span.showDetails').on('click' , function() {
      $(this).prev().find('.order-products').slideToggle(300);
    })



});