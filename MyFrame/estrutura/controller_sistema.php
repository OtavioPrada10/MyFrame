<?php
// include_once "conexao.php";
require_once 'class_login.php';

// namespace estrutura;

use estrutura\Login;

class ControllerSistema
{
    public function finalizaSessao()
    {
        $oLogin = new Login();
        $oLogin->finalizaSessao();
    }

    static function verificaLogin()
    {
        $oLogin = new Login();
        return $oLogin->getValidaLogin();
    }
}
