<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\SavedCode;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


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
            ->get();

        return response()->json([
            "response" => $message,'message' => 'Success'
        ]);
    }
public function saveCode(Request $request)
{
    $request->validate([
        'title' => 'required|string|max:255',
        'text' => 'required|string',
        'description' => 'nullable|string',
    ]);

    $savedCode = SavedCode::create([
        'user_id' => Auth::id(),
        'title' => $request->input('title'),
        'text' => $request->input('text'),
        'description' => $request->input('description'),
    ]);

    return response()->json([
        'status' => 'success',
        'message' => 'Code saved successfully',
        'saved_code' => $savedCode,
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
