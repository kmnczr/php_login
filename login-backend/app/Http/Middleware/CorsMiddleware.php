<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    public function handle($request, Closure $next)
    {
        // Allow from any origin
        $origin = $request->header('Origin') ?: '*';

        // Allow specific headers
        $headers = [
            'Access-Control-Allow-Origin' => $origin,
            'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers' => 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials' => 'true',
        ];

        // Handle preflight requests
        if ($request->isMethod('OPTIONS')) {
            return response()->json('OK', 200, $headers);
        }

        // Continue with the request
        $response = $next($request);

        // Add headers to the response
        foreach ($headers as $key => $value) {
            $response->header($key, $value);
        }

        return $response;
    }
}

