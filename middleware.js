import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const isLogin = request.cookies.get('token');
    if (!isLogin){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*']
  }