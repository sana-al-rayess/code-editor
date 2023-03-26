<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\SavedCode;
use App\Models\User;

class ActionController extends Controller
{
    public function getUsers()
    {
        $users = User::all();
        return response()->json(['users' => $users, 'message' => 'Success']);
    }


}
