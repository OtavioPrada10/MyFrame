<?php

namespace estrutura;

/**
 * classe de campos
 */
class CampoNumerico
{
    private $nome;
    private $id;
    private $label;

    public function __construct(string $nome, string $id, string $label)
    {
        $this->setNome($nome);
        $this->setId($id);
        $this->setLabel($label);

        return $this;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id 
     * @return self
     */
    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * @param mixed $nome 
     * @return self
     */
    public function setNome($nome): self
    {
        $this->nome = $nome;
        return $this;
    }


    /**
     * @return mixed
     */
    public function getLabel()
    {
        return $this->label;
    }

    /**
     * @param mixed $label 
     * @return self
     */
    public function setLabel($label): self
    {
        $this->label = $label;
        return $this;
    }

    public function hide()
    {
    }
}
