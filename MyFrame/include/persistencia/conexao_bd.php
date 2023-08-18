<?php

namespace persistencia;

/**
 * Persistencia que faz a conexao com o Bd
 */
class ConexaoDb {

    private $Conexao;

    /**
     * site com tutorial
     * https://www.devmedia.com.br/crud-com-php-pdo/28873
     */
    Protected $host     = 'localhost';
    protected $dbname   = "myframedb";
    protected $username = "root";
    protected $password = "";
    
    public function __construct($bConexao = false) {
        $this->Conexao = $bConexao;

        if ($bConexao) {
            $this->conectaBanco();
        }
    }

    public function getConexao() {
        return $this->Conexao;
    }

    public function setConexao($Conexao): void {
        $this->Conexao = $Conexao;
    }

    /**
     * 
     */
    private function conectaBanco() {
        try {
            $conn = new \PDO("mysql:host=$host;dbname=$dbname", $username,
                    $password);
            echo "Conectado a $dbname em $host com sucesso.";
        } catch (\PDOException $pe) {
            die("Não foi possível se conectar ao banco de dados $dbname :" . $pe->getMessage());
        }
    }

}
