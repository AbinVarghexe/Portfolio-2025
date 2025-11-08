import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Redirect to dashboard if already logged in
  if (pathname === '/admin/login') {
    const session = await getSession();
    if (session) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
