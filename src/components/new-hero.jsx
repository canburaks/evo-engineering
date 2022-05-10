import React, { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useWindowSize } from "../lib/use-window-size"
import { styled, blackA, keyframes } from "../styles/stitches.config"
import { Box } from "../styles/primitives"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import image1 from "../../public/img/_evo/slid/electrica-car-units.jpg"
import image2 from "../../public/img/_evo/slid/electrica-car-units2.jpg"
import image3 from "../../public/img/_evo/slid/electrica-car-units3.jpg"

const AspectRatio = AspectRatioPrimitive

const Overlay = styled("div", {
    //backgroundColor: "rgba(23,23,23,0.75)",
    background:"linear-gradient(0deg, rgba(0,0,0,0.7049413515406162) 0%, rgba(0,0,0,0.5004595588235294) 35%, rgba(0,0,0,0.05228028711484589) 100%);",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
})

const Video = styled("video", {
    objectFit: "cover",
    width: "100%",
    height: "100%"
})
const Img = styled("img", {
    objectFit: "cover",
    width: "100%",
    height: "100%"
})

export const Hero = ({ title, description }) => {
    const size = useWindowSize()
    const isMobile = useMemo(() => (size.width < 768 ? true : false), [size])

    return (
        <Box width={"full"} height="auto">
            <AspectRatio.Root ratio={isMobile ? 0.66 : 16 / 8}>
                {!isMobile ? (
                    <Video
                        src={"/video/evo.mp4"}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                    />
                ) : (
                    <Splide
                        aria-labelledby="My Favorite Images"
                        className="my-carousel"
                        options={{
                            rewind: true,
                            easing: "ease-in-out",
                            drag: "free",
                            autoplay: true
                        }}
                    >
                        <SplideSlide>
                            <Image src={image1} alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={image2} alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={image3} alt="Image 1" />
                        </SplideSlide>
                    </Splide>
                )}
                <Overlay>
                    <InfoBox direction="column" justify="end">
                        <Title
                            screen={{
                                "@initial": "mobile",
                                "@sm": "tablet",
                                "@md": "desktop"
                            }}
                            className="bg-clip-text animate-text-shimmer bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl max-w-full animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]">
                                {title}
                            </div>
                        </Title>
                        {/*<Description
                            screen={{
                                "@initial": "mobile",
                                "@sm": "tablet",
                                "@md": "desktop"
                            }}
                        >
                            {description}
                        </Description> */}
                    </InfoBox>
                </Overlay>
            </AspectRatio.Root>
        </Box>
    )
}
const slideUpFadeIn = keyframes({
    "0%": { opacity: 0, transform: "translateY(120px)" },
    "100%": { opacity: 1, transform: "translateY(0)" }
})

const Title = styled("h1", {
    fontFamily: "$cormorant",
    letterSpacing: "-0.03em",
    color: "#fefefe",
    fontWeight: "600",
    variants: {
        screen: {
            mobile: {
                fontSize: 32,
                textAlign: "center"
            },
            tablet: {
                fontSize: 44,
                textAlign: "center"
            },
            desktop: {
                fontSize: 56,
                textAlign: "center"
            }
        }
    },
    lineHeight: "$shortest",
    marginTop: 64,
    willChange: "transform, opacity",
    animationDuration: "1000ms",
    animationDelay: "500ms",
    animationTimingFunction: "$easeInOutQuint",
    animationFillMode: "both",
    animationName: slideUpFadeIn
})
const Description = styled("p", {
    marginTop: 16,
    color: "#fefefe",
    fontSize: 20,
    variants: {
        screen: {
            mobile: {
                fontSize: 16
            },
            tablet: {
                fontSize: 18
            },
            desktop: {
                fontSize: 20
            }
        }
    },
    willChange: "transform, opacity",
    animationDuration: "1000ms",
    animationDelay: "1500ms",
    animationTimingFunction: "$easeInOutQuint",
    animationFillMode: "both",
    animationName: slideUpFadeIn,
    "& *": {
        fontFamily: "$inter",
        color: "#fefefe",
        fontSize: 18
    }
})
const InfoBox = styled(Box, {
    position: "relative",
    justifyContent: "flex-end",
    height: "100%",
    margin: "0 auto",
    width: "100%",
    "@initial": { maxWidth: "90%", padding: "1rem" },
    "@sm": { maxWidth: "90%", padding: "2rem" },
    "@md": { maxWidth: "80rem", padding: "3rem" },
    bottom: 64
})
