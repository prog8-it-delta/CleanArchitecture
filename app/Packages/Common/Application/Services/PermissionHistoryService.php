<?php

namespace App\Packages\Common\Application\Services;

use App\Packages\Common\Application\Events\PermissionAdded;
use App\Packages\Common\Application\Events\PermissionDeleted;
use App\Packages\Common\Domain\PermissionDTO;
use Illuminate\Support\Facades\DB;

class PermissionHistoryService
{
    protected string $table_name = 'permission_history';

    public function __construct() {

    }

    public function getPermissionHistory(): array {
        $teams = DB::table($this->table_name)
            ->where('type', 'T')
            ->orderBy('created_at', 'desc')
            ->limit(15);

        $deps = DB::table($this->table_name)
            ->where('type', 'D')
            ->orderBy('created_at', 'desc')
            ->limit(15);

        return DB::table($this->table_name)
//            ->select('type', 'id', 'name')
            ->where('type', 'U')
            ->orderBy('created_at', 'desc')
            ->limit(15)
            ->union($teams)
            ->union($deps)
            ->get()
            ->toArray();
    }

    public function addHistoryItem(PermissionDTO $item):void {
        DB::table($this->table_name)
            ->where([
                'type' => $item->type,
                'id' => $item->id
            ])
            ->delete();

        DB::table($this->table_name)->insert([
            'type' => $item->type,
            'id' => $item->id,
            'name' => $item->name,
            'created_at' => now()
        ]);
    }

    public function deleteHistoryItem(PermissionDTO $item):void {
        DB::table($this->table_name)
            ->where([
                'type' => $item->type,
                'id' => $item->id
            ])
            ->delete();
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     * @return string[]
     */
    public function subscribe($events): array
    {
        return [
            PermissionAdded::class => 'permissionAddedEventListener',
            PermissionDeleted::class => 'permissionDeletedEventListener',
        ];

    }

    public function permissionAddedEventListener(PermissionAdded $event) {
        $this->addHistoryItem($event->permission);
    }

    public function permissionDeletedEventListener(PermissionDeleted $event) {
        $this->deleteHistoryItem($event->permission);
    }

}