<?php
// app/Http/Controllers/UserController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Method to handle user creation
    public function create(Request $request)
    {
        // Validate the request data
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Create the user
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password), // Hash the user's password before storing it in the database
        ]);

        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }
}
