import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales, pathnames, localePrefix } from './config/config';

export default createMiddleware({
    locales,
    defaultLocale,
    pathnames,
    localePrefix,
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(pt-BR|en-US)/:path*']
};