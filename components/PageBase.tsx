'use client';

import NextImage from "next/image";
import NavigationLink from "./NavigationLink";
import Link from "next/link";
import { AppShell, Burger, Flex, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useLocale, useTranslations } from "next-intl";

type Props = {
    children: React.ReactNode;
};

export default function PageBase({ children }: Props) {
    const [opened, { toggle }] = useDisclosure();
    const locale = useLocale();
    const t = useTranslations('NavBar');

    return (
        <>
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
                padding="md"
            >
                <AppShell.Header withBorder={false} bg={"transparent"} c={"white"}>
                    <Group h="100%" p="xl" justify="space-between">
                        <Group>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="white" />
                            <Link href={`/${locale}`}>
                                <Image component={NextImage} src={'/logo.png'} alt="Logo" width={57} height={73} priority={true} />
                            </Link>
                        </Group>
                        <Group>
                            <Flex visibleFrom="sm" gap="3.6rem">
                                <NavigationLink href={'/about'}>{t('about')}</NavigationLink>
                                <NavigationLink href={'/solutions'}>{t('solutions')}</NavigationLink>
                                <NavigationLink href={'/highlights'}>{t('highlights')}</NavigationLink>
                                <NavigationLink href={'/contact'}>{t('contact')}</NavigationLink>
                                <NavigationLink href={'/human-resources'}>{t('human-resources')}</NavigationLink>
                                <NavigationLink href={'/embrapii'}>EMBRAPII</NavigationLink>
                            </Flex>
                        </Group>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar py="md" px={4} h={"300px"} mt={50}>
                    <NavigationLink href={'/about'}>{t('about')}</NavigationLink>
                    <NavigationLink href={'/solutions'}>{t('solutions')}</NavigationLink>
                    <NavigationLink href={'/highlights'}>{t('highlights')}</NavigationLink>
                    <NavigationLink href={'/contact'}>{t('contact')}</NavigationLink>
                    <NavigationLink href={'/human-resources'}>{t('human-resources')}</NavigationLink>
                    <NavigationLink href={'/embrapii'}>EMBRAPII</NavigationLink>
                </AppShell.Navbar>

                <AppShell.Main p={0} c="white">
                    {children}
                </AppShell.Main>

                <AppShell.Footer pos={"static"} bottom={0} h={300} withBorder={false} style={{
                    'background': 'linear-gradient(90deg, #041026 0%, #013A65 100%)',
                    'border-radius': '20px 20px 0 0',
                }}>
                    <Flex>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </Flex>
                </AppShell.Footer>
            </AppShell>
        </>
    );
}