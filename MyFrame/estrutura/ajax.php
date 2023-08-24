<?php
// To pensando em fazer pelo nome do arqyuivo ele ve onde ta a pasta e cria o namespace....

require_once 'controller_sistema.php';

$sClasse = $_POST['sClasse'];

$oClass = new $sClasse();
//apenas para teste mas ainda não ta funcionando
$oClass->finalizaSessao();

