'use client';

import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";

type Props = {
    children: React.ReactNode;
    height: number;
};

export default function DefaultCarousel({ children, height }: Props) {
    const autoplay = useRef(emblaCarouselAutoplay({ delay: 2000 }));

    return (
        <>
            <Carousel height={height}
                classNames={{
                    controls: "carousel-controls",
                    "root": "carousel-root"
                }}
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                plugins={[autoplay.current]}
                align="center"
                loop>
                {children}
            </Carousel>
        </>
    );
}