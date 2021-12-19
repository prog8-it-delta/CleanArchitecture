<?php

namespace App\Packages\Learn\Infrastructure\Repositories;

use App\Packages\Shared\Infrastructure\Repositories\AbstractRepository;
use App\Packages\Learn\Entities\Course;
use App\Packages\Learn\Entities\Lesson;

class CourseRepository extends AbstractRepository
{

    function model()
    {
        return 'App\Models\Course';
    }

    function lessons($course_id) {
        return $this->model->find($course_id)->lessons()->get()->map(function ($item) {
            return new Lesson($item->toArray());
        })->toArray();
    }

    function mapProps($model)
    {
        return new Course($model->toArray());
    }
}
