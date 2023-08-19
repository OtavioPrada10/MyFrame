$(function () {
    var iCards = 2;
    $('.card-link').each(function(){
        $(this).css('grid-column', iCards);
        iCards += 2;
    });
});

