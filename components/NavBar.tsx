import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";

export default function NavBar() {
    const t = useTranslations('NavBar');

    return (
        <nav className="flex justify-between items-center p-6 text-white">
            <div className="ml-10">
                <Logo />
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
    );
}
