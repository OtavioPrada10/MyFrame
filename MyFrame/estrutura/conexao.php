<?php
// endereco
// nome do BD
// usuario
// senha

// $endereco = 'localhost';
// $banco = 'sispet';
// $usuario = 'postgres';
// $senha = 'toor';

// $endereco = "containers-us-west-51.railway.app";
// $banco = "railway";
// $usuario = "postgres";
// $senha = "gcuXnwMXebavNlVGcsfw";

$host = "containers-us-west-51.railway.app";
$database = "railway";
$user = "postgres";
$password = "gcuXnwMXebavNlVGcsfw";
$porta = 5840;
$options    = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  );

try {
    // sgbd:host;port;dbname
    // usuario
    // senha
    // errmode
    $pdo = new PDO("pgsql:host=$host;port=$porta;dbname=$database", $user, $password, $options);

    //echo "Conectado no banco de dados!!!";

} catch (PDOException $e) {
    echo "Falha ao conectar ao banco de dados. <br/>";
    die($e->getMessage());
}
