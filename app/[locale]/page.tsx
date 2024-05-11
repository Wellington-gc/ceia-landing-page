import PageBase from "@/components/PageBase";
import { BackgroundImage, Container } from "@mantine/core";

export default function HomePage() {
    return (
        <>
            <PageBase>
                <BackgroundImage src="/background.png" style={{ height: '100vh' }}>
                </BackgroundImage>
                <Container fluid h={250} bg={"blue"}></Container>
            </PageBase>
        </>
    );
}