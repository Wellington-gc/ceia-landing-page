import Link from "next/link";
import PageBase from "@/components/PageBase";
import HomePage from "@/components/HomePage";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { BackgroundImage, Button, Card, CardSection, Center, Container, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { CarouselSlide } from "@mantine/carousel";
import DefaultCarousel from "@/components/DefaultCarousel";

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
                {/* Caroulsel of partners - componentizible */}
                <Stack h={300} bg="linear-gradient(90deg, #041026 0%, #013A65 100%)" justify="center" p={"xl"}>
                    <DefaultCarousel height={300}>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Title c={"#F2F2F2"}>{t('partners')}</Title>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                    </DefaultCarousel>
                </Stack>
                <Container fluid h={"100vh"} bg="linear-gradient(90deg, #FFFFFF 0%, #EEEEEE 100%)">
                    <Flex justify={"flex-start"} h={"100vh"} align={"center"} p={"xl"}>
                        <Image src="/background2.svg" style={{ height: '80vh', width: '80vh', objectFit: 'scale-down' }} pos={"absolute"} />
                        <Group justify={"space-evenly"}>
                            <Stack maw={"30%"} justify="center">
                                <Title>{t('solutions')}</Title>
                                <Text size="lg" lineClamp={8}>{t('solutions-description')}</Text>
                                <Button variant="filled" size="xs" radius="xl" w={140} mt={"xl"}>{t('about-button')}</Button>
                            </Stack>
                            <Stack>
                                <Group gap={"xl"}>
                                    <Image src="/icon1.png" w={"74px"} h={"74px"}></Image>
                                    <Title>{t('audio-voice')}</Title>
                                </Group>
                                <Group gap={"xl"}>
                                    <Image src="/icon2.png" w={"74px"} h={"74px"}></Image>
                                    <Title>{t('data-science')}</Title>
                                </Group>
                                <Group gap={"xl"}>
                                    <Image src="/icon3.png" w={"74px"} h={"74px"}></Image>
                                    <Title>{t('computer-vision')}</Title>
                                </Group>
                                <Group gap={"xl"}>
                                    <Image src="/icon4.png" w={"74px"} h={"74px"}></Image>
                                    <Title>{t('comp-lang-proc')}</Title>
                                </Group>
                            </Stack>
                        </Group>
                    </Flex>
                </Container>
                <Container fluid h={"100vh"} bg="linear-gradient(90deg, #FFFFFF 0%, #EEEEEE 100%)">
                    <Center pos={"absolute"}>
                        <Stack align="center" maw={"40%"} gap={"xl"}>
                            <Stack gap={0}>
                                <Title size={"4rem"}>{t('cases')}</Title>
                                <Container w={160} h={7} bg={"#1DBBFB"} style={{ borderRadius: "0px 50px" }} m={0} />
                            </Stack>
                            <Text size="lg" lineClamp={3}>{t('cases-description')}</Text>
                        </Stack>
                    </Center>
                    <Flex justify={"flex-end"} h={"100vh"} align={"center"} p={"xl"}>
                        <Image src="/background2.svg" style={{ height: '80vh', width: '80vh', objectFit: 'scale-down' }} pos={"absolute"} />
                        <Container mt={"200px"} fluid>
                            <DefaultCarousel height={450}>
                                <CarouselSlide>
                                    <Card w="300px" h="450px" p={"xl"} bg={"transparent linear-gradient(159deg, #FFFFFF 0%, #F8F8F8C7 100%)"} radius={"md"} withBorder>
                                        <CardSection>
                                            <Center>
                                                <Image src={'/bettr-ads.png'} fit="scale-down"></Image>
                                            </Center>
                                        </CardSection>
                                        <CardSection>
                                            <Stack align="center" mx={"xs"}>
                                                <Title>bettrAds</Title>
                                                <Text size="xs" lineClamp={4} ta={"center"}>{t('cases-description')}</Text>
                                            </Stack>
                                        </CardSection>
                                        <CardSection>
                                            <Center><Button variant="outline" size="xs" radius="xl" w={140} mt={"xl"}>+ Mais Informações</Button></Center>
                                        </CardSection>
                                    </Card>
                                </CarouselSlide>
                                <CarouselSlide>
                                    <Card w="300px" h="450px" p={"xl"} bg={"transparent linear-gradient(159deg, #FFFFFF 0%, #F8F8F8C7 100%)"} radius={"md"} withBorder>
                                        <CardSection>
                                            <Center>
                                                <Image src={'/bettr-ads.png'} fit="scale-down"></Image>
                                            </Center>
                                        </CardSection>
                                        <CardSection>
                                            <Stack align="center" mx={"xs"}>
                                                <Title>bettrAds</Title>
                                                <Text size="xs" lineClamp={4} ta={"center"}>{t('cases-description')}</Text>
                                            </Stack>
                                        </CardSection>
                                        <CardSection>
                                            <Center><Button variant="outline" size="xs" radius="xl" w={140} mt={"xl"}>+ Mais Informações</Button></Center>
                                        </CardSection>
                                    </Card>
                                </CarouselSlide>
                                <CarouselSlide>
                                    <Card w="300px" h="450px" p={"xl"} bg={"transparent linear-gradient(159deg, #FFFFFF 0%, #F8F8F8C7 100%)"} radius={"md"} withBorder>
                                        <CardSection>
                                            <Center>
                                                <Image src={'/bettr-ads.png'} fit="scale-down"></Image>
                                            </Center>
                                        </CardSection>
                                        <CardSection>
                                            <Stack align="center" mx={"xs"}>
                                                <Title>bettrAds</Title>
                                                <Text size="xs" lineClamp={4} ta={"center"}>{t('cases-description')}</Text>
                                            </Stack>
                                        </CardSection>
                                        <CardSection>
                                            <Center><Button variant="outline" size="xs" radius="xl" w={140} mt={"xl"}>+ Mais Informações</Button></Center>
                                        </CardSection>
                                    </Card>
                                </CarouselSlide>
                                <CarouselSlide>
                                    <Card w="300px" h="450px" p={"xl"} bg={"transparent linear-gradient(159deg, #FFFFFF 0%, #F8F8F8C7 100%)"} radius={"md"} withBorder>
                                        <CardSection>
                                            <Center>
                                                <Image src={'/bettr-ads.png'} fit="scale-down"></Image>
                                            </Center>
                                        </CardSection>
                                        <CardSection>
                                            <Stack align="center" mx={"xs"}>
                                                <Title>bettrAds</Title>
                                                <Text size="xs" lineClamp={4} ta={"center"}>{t('cases-description')}</Text>
                                            </Stack>
                                        </CardSection>
                                        <CardSection>
                                            <Center><Button variant="outline" size="xs" radius="xl" w={140} mt={"xl"}>+ Mais Informações</Button></Center>
                                        </CardSection>
                                    </Card>
                                </CarouselSlide>
                                <CarouselSlide>
                                    <Card w="300px" h="450px" p={"xl"} bg={"transparent linear-gradient(159deg, #FFFFFF 0%, #F8F8F8C7 100%)"} radius={"md"} withBorder>
                                        <CardSection>
                                            <Center>
                                                <Image src={'/bettr-ads.png'} fit="scale-down"></Image>
                                            </Center>
                                        </CardSection>
                                        <CardSection>
                                            <Stack align="center" mx={"xs"}>
                                                <Title>bettrAds</Title>
                                                <Text size="xs" lineClamp={4} ta={"center"}>{t('cases-description')}</Text>
                                            </Stack>
                                        </CardSection>
                                        <CardSection>
                                            <Center><Button variant="outline" size="xs" radius="xl" w={140} mt={"xl"}>+ Mais Informações</Button></Center>
                                        </CardSection>
                                    </Card>
                                </CarouselSlide>
                            </DefaultCarousel>
                        </Container>
                    </Flex>
                </Container>
                {/* Caroulsel of data crunch - componentizible */}
                <Stack h={300} bg="linear-gradient(90deg, #041026 0%, #013A65 100%)" justify="center" p={"xl"}>
                    <DefaultCarousel height={300}>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Title c={"#F2F2F2"}>{t('partners')}</Title>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                        <Center>
                            <CarouselSlide>
                                <Flex w="300px" h="300px" align={"center"} justify={"center"}>
                                    <Image src={'/cemig.png'} w={"300px"} h={"300px"} fit="scale-down"></Image>
                                </Flex>
                            </CarouselSlide>
                        </Center>
                    </DefaultCarousel>
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
