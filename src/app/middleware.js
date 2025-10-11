const locales = ['ar', 'en'];
const defaultLocale = 'en'; // ✅ اللغة الافتراضية إنجليزية

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // ✅ يتحقق إذا URL فيه لغة معروفة
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // ✅ إذا فيه لمة، ما يعدلش حاجة
    if (pathnameHasLocale) return NextResponse.next();

    // ✅ إذا مفيش لغة، يضيف الإنجليزية
    const newPathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = newPathname;
    return NextResponse.redirect(url);
}