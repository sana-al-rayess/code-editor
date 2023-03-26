<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class SavedCode extends Model
{
    protected $fillable = [
        "user_id",
        "title",
        "description",
        "text"
    ];

    public function saved(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
