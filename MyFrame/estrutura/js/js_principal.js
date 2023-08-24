$(function () {
    var iCards = 2;
    var iCampos = 2;
    $('.card-link').each(function () {
        $(this).css('grid-column', iCards++);
    });

    $('.login-campo').each(function () {
        $(this).css('grid-row', iCampos++);
    })
});

$('.login-icon-senha').click(function () {
    if ($('#senhaLogin').attr('type') == 'password') {
        $('#senhaLogin').attr('type', 'text');
        $(this).removeClass('fa-eye');
        $(this).addClass('fa-eye-slash');
    }
    else {
        $('#senhaLogin').attr('type', 'password');
        $(this).removeClass('fa-eye-slash');
        $(this).addClass('fa-eye');
    }
});

function finalizaSessao(){
    var sClasse = 'ControllerSistema';
    var sFuncao = 'finalizaSessao'
    loadAjax(sClasse, sFuncao);
}


function loadAjax(sClasse, sFuncao) {

    $.ajax({
        url: "estrutura/ajax.php",  // Caminho do arquivo
        type: "POST",               // Ou "GET", dependendo da sua necessidade
        // dataType: "array",       // O tipo de dado que você espera receber do servidor  Ta dando erro nessa desgraça
        data: { sClasse: sClasse, sFuncao: sFuncao}, // Passa o parâmetro "sRotina" para o servidor
        success: function(xData) {  //pega a resposta do servidor
            return;
        },
        error: function(xhr, status, error) {
            console.error("Erro na requisição AJAX:", error);
        }
    });

};

