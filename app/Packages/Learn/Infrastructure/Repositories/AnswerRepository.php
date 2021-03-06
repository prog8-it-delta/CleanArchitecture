<?php

namespace App\Packages\Learn\Infrastructure\Repositories;

use App\Packages\Common\Infrastructure\Repositories\AbstractRepository;
use App\Packages\Learn\Entities\Answer;

class AnswerRepository extends AbstractRepository
{
    function model()
    {
        return 'App\Models\Answer';
    }

    function mapProps($model)
    {
        return new Answer($model->toArray());
    }

}
