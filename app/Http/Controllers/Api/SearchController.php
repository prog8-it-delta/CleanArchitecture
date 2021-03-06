<?php

namespace App\Http\Controllers\Api;

use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\User;
use Illuminate\Routing\Controller as BaseController;

class SearchController extends BaseController
{

    public function getAllUsers(Request $request)
    {
        $search = $request->has('search') ? '%' . $request->search . '%' : null;
        $selected = $request->has('selected') ? json_decode($request->selected) : null;

        $users = User::when(
            $search !== null,
            function ($query) use ($search) { return $query->where('name', 'like', $search); },
            function ($query) { return $query;}
        )
            ->when(
                $selected !== null,
                function ($query) use ($selected) { return $query->whereNotIn('id', $selected); },
                function ($query) { return $query;}
            )
            ->select('id as value', 'name as label')->paginate(10);

        return json_encode($users);
    }

    public function getAllDepartments(Request $request)
    {
        if ($request->has('search')) {
            $search = '%' . $request->search . '%';
            $departments = Department::where('name', 'like', $search)->select('id', 'name')->paginate(10);
        } else {
            $departments = Department::select('id', 'name')->paginate(10);
        }
        return json_encode($departments);
    }

    public function getAllCourses(Request $request)
    {
        if ($request->has('search')) {
            $search = '%' . $request->search . '%';
            $courses = Course::where('name', 'like', $search)->select('id', 'name')->paginate(10);
        } else {
            $courses = Course::select('id', 'name')->paginate(10);
        }
        return json_encode($courses);
    }

    public function getAllLessons(Request $request)
    {
        $search = $request->has('search') ? '%' . $request->search . '%' : null;
        $selected = $request->has('selected') ? json_decode($request->selected) : null;

        $lessons = Lesson::when(
            $search !== null,
            function ($query) use ($search) { return $query->where('name', 'like', $search); },
            function ($query) { return $query;}
        )
            ->when(
                $selected !== null,
                function ($query) use ($selected) { return $query->whereNotIn('id', $selected); },
                function ($query) { return $query;}
            )
            ->select('id as value', 'name as label')->paginate(10);

        return json_encode($lessons);
    }
}
