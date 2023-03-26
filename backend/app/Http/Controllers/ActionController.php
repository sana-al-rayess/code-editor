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

    function getMessages(Request $request)
    {
        $message = Message::where("sender_id", $request->sender_id)
            ->where("recepient_id", $request->recepient_id)
            ->orWhere("sender_id", $request->recepient_id)
            ->where("recepient_id", $request->sender_id)
            ->get();

        return response()->json([
            "response" => $message,'message' => 'Success'
        ]);
    }

    function sendMessage(Request $request){
        $message = Message::create([
            "sender_id" => $request->sender_id,
            "recepient_id" => $request->recepient_id,
            "message" => $request->message,
        ]);

        return response()->json([
            "message" => $message->message,
            "status" => "sent"
        ]);
    }


}
