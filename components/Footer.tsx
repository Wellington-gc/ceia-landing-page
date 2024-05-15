import NavigationLink from "./NavigationLink";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { Center, Flex, Group, Image, Stack, Title } from "@mantine/core";

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <>
            <Flex justify={"space-between"}
                c={"white"}
                direction={{ base: 'column', md: 'row' }}
                p={"lg"}>
                <Center p={"lg"}>
                    <Image src={'/ceia-medium.png'} alt="Logo" w={140} h={180} />
                </Center>

                <Flex align="start" direction={{ base: 'column', md: 'row' }}>
                    <Stack p={"lg"}>
                        <Title order={3}>{t('institutional')}</Title>
                        <NavigationLink href={'/about'}>{t('ceia')}</NavigationLink>
                        <NavigationLink href={'/human-resources'}>{t('human-resources')}</NavigationLink>
                        <NavigationLink href={'/contact'}>{t('contact')}</NavigationLink>
                    </Stack>

                    <Stack p={"lg"}>
                        <Title order={3}>{t('portfolio')}</Title>
                        <NavigationLink href={'/solutions'}>{t('solutions')}</NavigationLink>
                        <NavigationLink href={'/about'}>{t('our-team')}</NavigationLink>
                    </Stack>

                    <Stack p={"lg"}>
                        <Title order={3}>{t('posts')}</Title>
                        <NavigationLink href={'/embrapii'}>{t('blog')}</NavigationLink>
                        <NavigationLink href={'/highlights'}>{t('news')}</NavigationLink>
                    </Stack>
                </Flex>

                <Stack p={"lg"} justify="end">
                    <Title order={3}>{t('socials')}</Title>
                    <Group gap={"lg"}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </Group>
                </Stack>
            </Flex>
        </>
    );
}