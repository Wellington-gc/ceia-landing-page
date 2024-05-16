import { BackgroundImage, Container } from "@mantine/core";

type Props = {
    children: React.ReactNode;
};

export default function HomePage({ children }: Props) {
    return (
        <>
            <BackgroundImage src="/background.png" style={{ height: '100vh' }}>
                <Container fluid pt={150} h={"100vh"}>
                    {children}
                </Container>
            </BackgroundImage>
        </>
    );
}