import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import NavigationLink from "./NavigationLink";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-gradient-to-r from-primary-dark-blue to-secondary-dark-blue text-white pl-40 pt-16 pb-16 pr-32"
            style={{ borderRadius: "20px 20px 0px 0px" }}>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <Image src={"/ceia-medium.png"} alt="CeiaMedium" height={180} width={140} />
                </div>
                <div className="flex items-start space-x-20 pl-48">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold pb-5">{t('institutional')}</h1>
                        <NavigationLink href={'/about'}>{t('ceia')}</NavigationLink>
                        <NavigationLink href={'/human-resources'}>{t('human-resources')}</NavigationLink>
                        <NavigationLink href={'/contact'}>{t('contact')}</NavigationLink>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold pb-5">{t('portfolio')}</h1>
                        <NavigationLink href={'/solutions'}>{t('solutions')}</NavigationLink>
                        <NavigationLink href={'/about'}>{t('our-team')}</NavigationLink>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-xl font-bold pb-5">{t('posts')}</h1>
                        <NavigationLink href={'/embrapii'}>{t('blog')}</NavigationLink>
                        <NavigationLink href={'/highlights'}>{t('news')}</NavigationLink>
                    </div>
                </div>
                <div className="flex items-center flex-col">
                    <h1 className="text-lg font-bold pb-5">{t('socials')}</h1>
                    <div className="space-x-6">
                        <FontAwesomeIcon icon={faInstagram} size={"2x"} />
                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                        <FontAwesomeIcon icon={faFacebook} size={"2x"} />
                        <FontAwesomeIcon icon={faYoutube} size={"2x"} />
                    </div>
                </div>
            </div>
        </footer>
    );
}