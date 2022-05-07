import { styled } from '../stitches.config'


export const Box = styled("div", {
    display: "flex",
    position: "relative",
    variants: {
        direction: {
            column: {
                flexDirection: "column"
            },
            col: {
                flexDirection: "column"
            },
            row: {
                flexDirection: "row"
            }
        },
        justify: {
            start: { justifyContent: "flex-start" },
            around: { justifyContent: "space-around" },
            between: { justifyContent: "space-between" },
            end: { justifyContent: "flex-end" },
            center: { justifyContent: "center" }
        },
        items: {
            start: { alignItems: "flex-start" },
            end: { alignItems: "flex-end" },
            center: { alignItems: "center" },
            streth: { alignItems: "streth" }
        },
        width: {
            full: { width: "100%" },
            auto: { width: "auto" }
        },
        maxWidth: {
            screen: { maxWidth: "100vw", overflowX: "hidden" }
        },
        height: {
            full: { height: "100%" },
            auto: { height: "auto" }
        },
        type: {
            cover: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            },
            centered: {
                justifyContent: "center",
                alignItems: "center"
            }
        }
    }
})
