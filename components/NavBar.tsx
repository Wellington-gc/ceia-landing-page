import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocaleSwitcher";

export default function NavBar() {
    const t = useTranslations('NavBar');

    return (
        <nav className="flex justify-between items-center p-4 text-white">
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-14 pl-10" />
            </div>
            <div className="flex items-center space-x-12">
                <NavigationLink href="/about">{t('about')}</NavigationLink>
                <NavigationLink href="/solutions">{t('solutions')}</NavigationLink>
                <NavigationLink href="/highlights">{t('highlights')}</NavigationLink>
                <NavigationLink href="/contact">{t('contact')}</NavigationLink>
                <NavigationLink href="/human-resources">{t('human-resources')}</NavigationLink>
                <NavigationLink href="/embrapii">EMBRAPII</NavigationLink>
                <LocaleSwitcher />
            </div>
        </nav>
    )
}