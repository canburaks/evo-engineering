import React from "react"
import { styled, blackA } from "../stitches.config"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

// Exports
export const AspectRatio = AspectRatioPrimitive

// Your app...
const Box = styled("div", {})
const Img = styled("img", {
    objectFit: "cover",
    width: "100%",
    height: "100%"
})
export const Overlay = styled("div", {
    backgroundColor: "rgba(23,23,23,0.75)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
})

export const MyAspectRatio = (props) => (
    <Box
        css={{
            width: 300,
            borderRadius: 6,
            overflow: "hidden",
        }}
    >
        <AspectRatio.Root ratio={16 / 9}>
            {props.children}
        </AspectRatio.Root>
    </Box>
)

export default MyAspectRatio
