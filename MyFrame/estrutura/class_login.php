<?php
namespace estrutura;
include_once 'view_login.php';



/**
 * Classe de loguin 
 * @author Otavio Prada
 * @since 21/08/2023
 */
class Login
{

    // Valida o loguin 
    public function getValidaLogin()
    {
        if (!isset($_SESSION['login'])) {
            $oViewSistema = new ViewLogin();
            return $oViewSistema->getLayoutLogin();
        } else {

        }
    }
}
