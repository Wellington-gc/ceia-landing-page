import Link from "next/link";
import PageBase from "@/components/PageBase";
import HomePage from "@/components/HomePage";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { BackgroundImage, Button, Container, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <>
            <PageBase>
                <HomePage>
                    <Flex direction={{ base: "column", md: "row" }} justify={"space-around"} align={"center"} gap={"xl"}>
                        <Stack justify="center" maw={500} gap={"xl"} c={"white"}>
                            <Stack gap={0}>
                                <Title>{t('title')}</Title>
                                <Container w={300} h={7} bg={"#1DBBFB"} style={{ borderRadius: "0px 50px" }} m={0} />
                            </Stack>
                            <Text size="lg" lineClamp={8}>{t('description')}</Text>
                            <Group gap={"lg"}>
                                <Link href={"https://www.instagram.com/ceiaufg/"} target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
                                </Link>
                                <Link href={"https://www.linkedin.com/company/inteligencia-artificial-deep-learning-brasil/"} target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
                                </Link>
                                <Link href={"https://www.facebook.com/centrodeia/"} target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                                </Link>
                                <Link href={"https://www.youtube.com/channel/UCuVftdqn8UJ8abkgI6dEA_w"} target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" color="white" />
                                </Link>
                            </Group>
                            <Button variant="filled" size="xs" radius="xl" w={140}>{t('about-button')}</Button>
                        </Stack>
                        <Image
                            src={'/ceia-large.png'}
                            alt="CeiaLarge"
                            maw={{ base: "40vh", md: "60vh" }}
                            mah={{ base: "20vh", md: "60vh" }}
                            fit="scale-down"
                        />
                    </Flex>
                </HomePage>
                <Stack h={300} bg="linear-gradient(90deg, #041026 0%, #013A65 100%)" justify="center" p={"xl"}>
                    <Flex justify={"space-evenly"} align={"center"} wrap={"revert"} c={"#F2F2F2"}>
                        <Title>{t('partners')}</Title>
                        <Image src={'/cemig.png'}></Image>
                    </Flex>
                </Stack>
                <Container fluid h={"100vh"} bg="linear-gradient(90deg, #FFFFFF 0%, #EEEEEE 100%)">
                    <Flex justify={"flex-start"} h={"100vh"} align={"flex-start"} p={"xl"}>
                        <BackgroundImage src="/background2.svg" h={750} w={760}>
                        </BackgroundImage>
                    </Flex>
                </Container>
                <Container fluid h={"100vh"} bg="linear-gradient(90deg, #FFFFFF 0%, #EEEEEE 100%)">
                    <Flex justify={"flex-end"} h={"100vh"} align={"flex-end"} p={"xl"}>
                        <BackgroundImage src="/background2.svg" h={750} w={760}>
                        </BackgroundImage>
                    </Flex>
                </Container>
                <Stack h={300} bg="linear-gradient(90deg, #041026 0%, #013A65 100%)" justify="center" p={"xl"}>
                    <Flex justify={"space-evenly"} align={"center"} wrap={"revert"} c={"#F2F2F2"}>
                        <Title>{t('partners')}</Title>
                        <Image src={'/cemig.png'}></Image>
                    </Flex>
                </Stack>
                <Container fluid h={"100vh"} bg="linear-gradient(90deg, #FFFFFF 0%, #EEEEEE 100%)">
                </Container>
                <Container fluid h={"100vh"} bg="linear-gradient(90deg, #FFFFFF 0%, #EEEEEE 100%)">
                    <Flex justify={"flex-end"} h={"100vh"} align={"flex-end"} p={"xl"}>
                        <BackgroundImage src="/background2.svg" h={750} w={760}>
                        </BackgroundImage>
                    </Flex>
                </Container>
            </PageBase >
        </>
    );
}
