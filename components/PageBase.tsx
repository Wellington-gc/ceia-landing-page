'use client';

import NavigationLink from "./NavigationLink";
import Link from "next/link";
import Footer from "./Footer";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { AppShell, BackgroundImage, Burger, Container, Flex, Group, Image, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
                header={{ height: 0 }}
                navbar={{ width: 300, breakpoint: 'md', collapsed: { desktop: true, mobile: !opened } }}
                padding="md">
                <AppShell.Header withBorder={false} bg={"transparent"} c={"white"} pos={"absolute"}>
                    <Group h="100%" p="xl" justify="space-between">
                        <Group gap={"xl"}>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" color="white" />
                            <Link href={`/${locale}`}>
                                <Image src={'/logo.png'} alt="Logo" w={57} h={73} />
                            </Link>
                        </Group>
                        <Group>
                            <Flex visibleFrom="md" gap="3.6rem">
                                <NavigationLink href={'/about'}>{t('about')}</NavigationLink>
                                <NavigationLink href={'/solutions'}>{t('solutions')}</NavigationLink>
                                <NavigationLink href={'/highlights'}>{t('highlights')}</NavigationLink>
                                <NavigationLink href={'/contact'}>{t('contact')}</NavigationLink>
                                <NavigationLink href={'/human-resources'}>{t('human-resources')}</NavigationLink>
                                <NavigationLink href={'/embrapii'}>EMBRAPII</NavigationLink>
                            </Flex>
                            <LocaleSwitcherSelect />
                        </Group>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar c={"white"} bg={"black"} withBorder={false} pos={"absolute"}>
                    <Stack m={"xl"}>
                        <Burger opened={opened} onClick={toggle} size="md" color="white" />
                        <NavigationLink href={'/about'}>{t('about')}</NavigationLink>
                        <NavigationLink href={'/solutions'}>{t('solutions')}</NavigationLink>
                        <NavigationLink href={'/highlights'}>{t('highlights')}</NavigationLink>
                        <NavigationLink href={'/contact'}>{t('contact')}</NavigationLink>
                        <NavigationLink href={'/human-resources'}>{t('human-resources')}</NavigationLink>
                        <NavigationLink href={'/embrapii'}>EMBRAPII</NavigationLink>
                    </Stack>
                </AppShell.Navbar>

                <AppShell.Main p={0} c="white">
                    <BackgroundImage src="/background.png" style={{ height: '100vh' }} />
                    {children}
                </AppShell.Main>

                <AppShell.Footer
                    pos={"static"}
                    bottom={0}
                    mih={300}
                    withBorder={false}
                    bg="linear-gradient(90deg, #041026 0%, #013A65 100%)"
                    style={{ 'borderRadius': '20px 20px 0 0' }}>
                    <Footer />
                </AppShell.Footer>
            </AppShell>
        </>
    );
}