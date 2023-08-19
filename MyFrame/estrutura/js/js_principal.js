$(function () {
    var iCards = 2;
    $('.card-link').each(function(){
        $(this).css('grid-column', iCards);
        iCards += 2;
    });
    // var maiorLinha = 0;
    // $(".container .linha").each(function () {
    //     var larguraLinha = 0;
    //     $(this).children(".tile").each(function () {
    //         larguraLinha += $(this).width();
    //         larguraLinha += 2 * parseInt($(this).css("margin-right").toString().replace("px", ""));
    //     });
    //     if (larguraLinha > maiorLinha)
    //         maiorLinha = larguraLinha + 5;
    // });
    // $(".container").css("width", maiorLinha.toString() + "px");
});
$(".tile").mousedown(function () {
    $(this).addClass("selecionado");
});

$(".tile").mouseup(function () {
    $(this).removeClass("selecionado");
});
$(".tile").mouseleave(function () {
    $(this).removeClass("selecionado");
});

