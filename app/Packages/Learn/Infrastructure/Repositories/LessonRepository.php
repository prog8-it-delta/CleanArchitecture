<?php

namespace App\Packages\Learn\Infrastructure\Repositories;

use App\Packages\Learn\Entities\Question;
use App\Packages\Shared\Infrastructure\Repositories\AbstractRepository;
use App\Packages\Learn\Entities\Lesson;

class LessonRepository extends AbstractRepository
{

    function model()
    {
        return 'App\Models\Lesson';
    }

    function mapProps($model)
    {
        return new Lesson($model->toArray());
    }

    function questions($lesson_id)
    {
        return $this->model->find($lesson_id)->questions()->get()->map(function ($item) {
            return new Question($item->toArray());
        })->toArray();
    }
}