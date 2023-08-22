$(function () {
    var iCards = 2;
    var iCampos = 2;
    $('.card-link').each(function(){
        $(this).css('grid-column', iCards++);
    });

    $('.login-campo').each(function(){
        $(this).css('grid-row', iCampos++);
    })
});

$('.login-icon-senha').click(function(){
    if($('#senhaLogin').attr('type') == 'password'){
        $('#senhaLogin').attr('type', 'text');
        $(this).removeClass('fa-eye');
        $(this).addClass('fa-eye-slash');
    }
    else{
        $('#senhaLogin').attr('type', 'password');
        $(this).removeClass('fa-eye-slash');
        $(this).addClass('fa-eye');
    }
});

