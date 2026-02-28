import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname;
  if (host === 'thephotoboothguy.ca') {
    const url = request.nextUrl.clone();
    url.host = 'www.thephotoboothguy.ca';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}
