<?php

namespace App\Packages\Common\Infrastructure\Repositories;

use App\Packages\Common\Domain\Team;
use App\Packages\Common\Infrastructure\Repositories\AbstractRepository;

class TeamRepository extends AbstractRepository
{

    function model()
    {
        return 'App\Models\Common\Team';
    }

    function mapProps($model)
    {
        return new Team($model->toArray());
    }

}
