<?php

namespace estrutura;

use estrutura\Campo;

/**
 * classe de campos
 * @author Otavio Prada
 * @since 19/08/2023
 */
class CampoNumerico extends Campo
{
    

    public function __construct(string $nome, string $label, int $tamanho)
    {
        $this->setNome($nome);
        $this->setId($nome);
        $this->setLabel($label);
        $this->setTamanho($tamanho);

        return $this;
    }
}