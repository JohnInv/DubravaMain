$(document).ready(function() {

    $('.tab').on('click' , function(){
        $('section.section-tab').fadeOut(300);
        $(this).parent().find('.tab.active').removeClass('active');
        $(this).addClass('active');

        let id = $(this).attr('data-user');
        $('#' + id).fadeIn(300);
    });

    $('section.addAdress button.btn-addAdress').on('click' , function() {
        $('form.addAdress').slideToggle(300);
    })

});
