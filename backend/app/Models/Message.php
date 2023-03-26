<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        "sender_id",
        "recepient_id",
        "message",
    ];

    // public function sent(): BelongsTo
    // {
    //     return $this->belongsTo(User::class, 'sender_id');
    // }
    // public function received(): BelongsTo
    // {
    //     return $this->belongsTo(User::class, 'recepient_id');
    // }
}
