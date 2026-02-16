import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let locales = ['tr', 'en'];
let defaultLocale = 'tr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Önemli: Statik dosyalara müdahale etme (public/logo, public/fonts vb)
  if (
    pathname.startsWith('/logo/') ||
    pathname.startsWith('/fonts/') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Pathname içinde dil kodu var mı kontrol et
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Dil kodu yoksa, varsayılana yönlendir
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // API veya statik dosyalar haricindeki tüm rotalar
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
