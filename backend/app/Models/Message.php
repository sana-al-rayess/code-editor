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

    public function sent(): HasMany
    {
        return $this->hasMany(User::class, 'sender_id');
    }
    public function received(): HasMany
    {
        return $this->hasMany(User::class, 'recepient_id');
    }
}
