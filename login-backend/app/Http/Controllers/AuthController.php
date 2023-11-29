<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class AuthController extends Controller
{
    // Method to handle user login
    public function login(Request $request)
    {
        // Extract email and password from the request
        $credentials = $request->only('email', 'password');    
        // Check if the user with the provided email exists
        $user = User::where('email', $credentials['email'])->first();
    
        if ($user) {
            // User exists, attempt authentication
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                // Create a new token for the authenticated user
                $token = $user->createToken('authToken')->accessToken;
    
                return response()->json(['token' => $token, 'email' => $user->email], 200);
            } else {
                return response()->json(['error' => 'Invalid password'], 401);
            }
        } else {
            // User does not exist
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
