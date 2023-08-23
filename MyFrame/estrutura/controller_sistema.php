<?php
// include_once "conexao.php";
require_once 'class_login.php';

use estrutura\Login;


function verificaLogin(){
    $oLogin = new Login();
    return $oLogin->getValidaLogin();
}


