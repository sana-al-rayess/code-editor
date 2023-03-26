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

    public function getCodes()
    {
        $savedCodes = SavedCode::all();
        $response = [
            'success' => true,
            'data' => $savedCodes,
            'message' => 'Saved codes retrieved successfully.'
        ];
        return response()->json($response);
    }


    function getMessages(Request $request)
    {
        $message = Message::where("sender_id", $request->sender_id)
            ->where("recepient_id", $request->recepient_id)
            ->orWhere("sender_id", $request->recepient_id)
            ->where("recepient_id", $request->sender_id)
            // ->with("sender", "recepient")
            ->get();

        return response()->json([
            "response" => $message,'message' => 'Success'
        ]);
    }


}
