<?php

namespace App\Http\Controllers\Learn;

use App\Models\JournalLesson;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class StudentController extends BaseController
{

    /**
     * Select portal.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function index(Request $request) {
        $orderBy = $request->orderby ?? 'id';
        $sortBy = $request->sortby ?? 'asc';
        $perPage = $request->perpage ?? 10;

        $paginatedList = JournalLesson::orderBy($orderBy, $sortBy)->paginate($perPage);

        if ($request->has('page')) { // response for pagination
            return $paginatedList;
        }

        return Inertia::render('Admin/Learning/Students', compact('paginatedList'));
    }
}