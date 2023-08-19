<?php

namespace estrutura;

/**
 * Classe cria campos, Responsavel por criar os campos na tela
 * Autor Otavio Vinicius Prada
 */
abstract class Campo
{
    protected $nome;
    protected $id;
    protected $label;
    protected $tamanho;

    /**
     * Get the value of nome
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * Set the value of nome
     */
    public function setNome($nome): self
    {
        $this->nome = $nome;

        return $this;
    }

    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     */
    public function setId($id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of label
     */
    public function getLabel()
    {
        return $this->label;
    }

    /**
     * Set the value of label
     */
    public function setLabel($label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Get the value of tamanho
     */
    public function getTamanho()
    {
        return $this->tamanho;
    }

    /**
     * Set the value of tamanho
     */
    public function setTamanho($tamanho): self
    {
        $this->tamanho = $tamanho;

        return $this;
    }
}
