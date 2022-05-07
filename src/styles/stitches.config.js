// stitches.config.ts
import { createStitches } from "@stitches/react"
import {
    violet,
    indigo,
    purple,
    blackA,
    mauve,
    cyan,
    teal,
    gray,
    blue,
    red,
    green,
    orange,
    grayDark,
    blueDark,
    redDark,
    greenDark
} from "@radix-ui/colors"

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({
    prefix: "cbs",
    theme: {
        colors: {
            ...gray,
            ...blue,
            ...red,
            ...green
        },
        fonts: {
            inter: "Inter, apple-system, sans-serif"
        },
        space: {
            0: "0px",
            1: "2px",
            2: "4px",
            3: "8px",
            4: "16px",
            5: "32px",
            6: "64px"
        }
    },
    media: {
        sm: "(min-width: 480px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 1024px)",
        xl: "(min-width: 1280px)",
        xxl: "(min-width: 1536px)"
    },
    utils: {
        size: (value) => ({
            width: value,
            height: value
        })
    }
})

const darkTheme = createTheme({
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark
    }
})

export {
    violet,
    indigo,
    purple,
    blackA,
    mauve,
    cyan,
    teal,
    gray,
    blue,
    red,
    green,
    orange,
    grayDark,
    blueDark,
    redDark,
    greenDark
}

//console.log("fs", fs.readdirSync("src/client/public/stylesheets"))
/*
export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  '@font-face': {
    fontFamily: 'Cormorant',
    src: 'local("Cormorant"), url("Cormorant.ttf")',
  },
});
*/
