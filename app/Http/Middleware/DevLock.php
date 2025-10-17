<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class DevLock
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $variable = (string) config('md.dev_lock_variable');

        if ($variable === '') {
            return $next($request);
        }

        if (
            isset($_GET[$variable])
            || (
                is_string($request->cookie($variable, ''))
                && $request->cookie($variable, '') !== ''
            )
        ) {
            Cookie::queue($variable, $variable, time() + 3600 * 24 * 888);
        } else {
            echo 'Сайт на реконструкции...';
            exit;
        }

        return $next($request);
    }
}
