import PageBase from "@/components/PageBase";
import { Container } from "@mantine/core";

export default function HomePage() {
    return (
        <>
            <PageBase>
                <Container fluid h={250} bg={"white"}></Container>
            </PageBase>
        </>
    );
}