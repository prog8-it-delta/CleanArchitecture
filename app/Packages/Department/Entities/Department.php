<?php

namespace App\Packages\Department\Entities;

class Department
{
    public $id;

    public $name;

    public $head;

    public $parent;

    /**
     * @param $prop
     */
    public function __construct($prop)
    {
        foreach ($prop as $key => $value) {
            $this->{$key} = $value;
        }
    }

}
