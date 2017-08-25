$(document).ready(function () {

    var weight;

    $('.basket__product .product__amount span.amount--weight-dec').on('click' , function() {
        weightDom = $(this).prev();
        weight = +(weightDom.html().split('').splice(0,1).join(''));
        weight--;
        weightDom.html(weight + " кг");
    })

    $('.basket__product .product__amount span.amount--weight-inc').on('click' , function() {
        weightDom = $(this).prev().prev();
        weight = +(weightDom.html().split('').splice(0,1).join(''));
        weight++;
        weightDom.html(weight + " кг");
    })

});