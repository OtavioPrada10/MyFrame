<?php
$host = "containers-us-west-51.railway.app";
$database = "railway";
$user = "postgres";
$password = "gcuXnwMXebavNlVGcsfw";
$porta = 5840;
$options    = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  );

try {
    $pdo = new PDO("pgsql:host=$host;port=$porta;dbname=$database", $user, $password, $options);

    echo "Conectado no banco de dados!!!";

} catch (PDOException $e) {
    echo "Falha ao conectar ao banco de dados. <br/>";
    die($e->getMessage());
}


