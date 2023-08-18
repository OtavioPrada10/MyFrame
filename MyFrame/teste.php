<?php
/**
 * site com tutorial
 * https://www.devmedia.com.br/crud-com-php-pdo/28873
 */

$host = 'localhost';
$dbname = "myframedb";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username,
$password);
    echo "Conectado a $dbname em $host com sucesso.";
} catch (PDOException $pe) {
    die("Não foi possível se conectar ao banco de dados $dbname :" . $pe
>getMessage());
    
}