<?php
include_once "conexao.php";
require_once 'class_login.php';

use estrutura\Login;



$oLoguin = new Login();

$oLoguin->getValidaLogin();
echo 'teste';

