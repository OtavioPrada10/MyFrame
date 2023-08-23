<?php

namespace estrutura;

include_once 'view_login.php';



/**
 * Classe de login
 * @author Otavio Prada
 * @since 21/08/2023
 */
class Login
{
    // Valida o login
    public function getValidaLogin()
    {

        session_start();

        if (!isset($_SESSION['login'])) {
            if (isset($_POST['acao'])) {
                $login = 'teste';
                $senha = '123';

                if (isset($_POST['login']) && isset($_POST['senha'])) {
                    $sInputLogin = $_POST['login'];
                    $sSenha = $_POST['senha'];

                    if ($login == $sInputLogin && $senha == $sSenha) {
                        $_SESSION['login'] = true;
                        $this->getValidaLogin();
                    } else {
                        echo 'Login Invalido';
                    }
                }
            }
            $oViewSistema = new ViewLogin();
            return $oViewSistema->getLayoutLogin();
        } else {
            return include_once './home.php';
        }
    }
}
