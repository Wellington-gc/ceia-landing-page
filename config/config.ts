import { Pathnames } from "next-intl/navigation";

export const defaultLocale = 'pt-BR' as const;
export const locales = ['pt-BR', 'en-US', 'es-ES'] as const;

export const pathnames = {
    '/': '/',
    '/about': {
        'pt-BR': '/sobre',
        'en-US': '/about',
        'es-ES': '/sobre',
    },
    '/solutions': {
        'pt-BR': '/solucoes',
        'en-US': '/solutions',
        'es-ES': '/soluciones',
    },
    '/highlights': {
        'pt-BR': '/destaques',
        'en-US': '/highlights',
        'es-ES': '/aspectos-destacados',
    },
    '/contact': {
        'pt-BR': '/contato',
        'en-US': '/contact',
        'es-ES': '/contacto',
    },
    '/human-resources': {
        'pt-BR': '/recursos-humanos',
        'en-US': '/human-resources',
        'es-ES': '/recursos-humanos',
    },
    '/embrapii': {
        'pt-BR': '/embrapii',
        'en-US': '/embrapii',
        'es-ES': '/embrapii',
    }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
