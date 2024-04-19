import { Pathnames } from "next-intl/navigation";

export const defaultLocale = 'en-US' as const;
export const locales = ['en-US', 'pt-BR'] as const;

export const pathnames = {
    '/': '/',
    '/about': {
        'en-US': '/about',
        'pt-BR': '/sobre'
    },
    '/solutions': {
        'en-US': '/solutions',
        'pt-BR': '/solucoes'
    },
    '/highlights': {
        'en-US': '/highlights',
        'pt-BR': '/destaques'
    },
    '/contact': {
        'en-US': '/contact',
        'pt-BR': '/contato'
    },
    '/human-resources': {
        'en-US': '/human-resources',
        'pt-BR': '/recursos-humanos'
    },
    '/embrapii': {
        'en-US': '/embrapii',
        'pt-BR': '/embrapii'
    }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
