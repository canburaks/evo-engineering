import React, { Fragment, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { styled, keyframes, css } from "../styles/stitches.config"
import { Box } from "../styles/primitives/box"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { CaretDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import {
    violet,
    mauve,
    indigo,
    purple,
    teal,
    cyan,
    blackA,
    orange
} from "../styles/stitches.config"
import { useRouter } from "next/router"
import { navbar } from "../settings"
import { useTranslation } from "next-i18next"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

const enterFromRight = keyframes({
    from: { transform: "translateX(200px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 }
})

const enterFromLeft = keyframes({
    from: { transform: "translateX(-200px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 }
})

const exitToRight = keyframes({
    from: { transform: "translateX(0)", opacity: 1 },
    to: { transform: "translateX(200px)", opacity: 0 }
})

const exitToLeft = keyframes({
    from: { transform: "translateX(0)", opacity: 1 },
    to: { transform: "translateX(-200px)", opacity: 0 }
})

const scaleIn = keyframes({
    from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
    to: { transform: "rotateX(0deg) scale(1)", opacity: 1 }
})

const scaleOut = keyframes({
    from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
    to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 }
})

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
})

const fadeOut = keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
})

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    zIndex: 30,
    padding: "8px 32px"
})

const StyledList = styled(NavigationMenuPrimitive.List, {
    all: "unset",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 4,
    borderRadius: 6,
    listStyle: "none",
    variants: {
        screen: {
            hidden: { display: "none" },
            visible: { display: "flex" }
        },
        altitude: {
            high: {}
        }
    }
    //boxShadow: `0 2px 10px ${blackA.blackA7}`
})

const itemStyles = {
    padding: "8px 12px",
    outline: "none",
    userSelect: "none",
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 4,
    fontSize: 15,
    color: orange.orange12,
    "&:focus": {
        position: "relative",
        boxShadow: `0 0 0 2px ${orange.orange7}`
    },
    "&:hover": { backgroundColor: orange.orange3 }
}

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
    all: "unset",
    ...itemStyles,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2
})

const StyledCaret = styled(CaretDownIcon, {
    position: "relative",
    color: violet.violet10,
    top: 1,
    "[data-state=open] &": { transform: "rotate(-180deg)" },
    "@media (prefers-reduced-motion: no-preference)": {
        transition: "transform 250ms ease"
    }
})

const StyledTriggerWithCaret = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <StyledTrigger {...props} ref={forwardedRef}>
            {children}
            <StyledCaret aria-hidden />
        </StyledTrigger>
    )
)

const StyledLink = styled(NavigationMenuPrimitive.Link, {
    ...itemStyles,
    display: "block",
    textDecoration: "none",
    fontSize: 15,
    lineHeight: 1,
    variants: {
        background: {
            orange: {
                background: `linear-gradient(135deg, ${orange.orange8} 0%, ${orange.orange11} 100%);`
            },
            green: {
                background: `linear-gradient(135deg, ${teal.teal7} 0%, ${cyan.cyan11} 100%);`
            }
        }
    }
})

const StyledContent = styled(NavigationMenuPrimitive.Content, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    "@media only screen and (min-width: 600px)": { width: "auto" },
    "@media (prefers-reduced-motion: no-preference)": {
        animationDuration: "250ms",
        animationTimingFunction: "ease",
        '&[data-motion="from-start"]': { animationName: enterFromLeft },
        '&[data-motion="from-end"]': { animationName: enterFromRight },
        '&[data-motion="to-start"]': { animationName: exitToLeft },
        '&[data-motion="to-end"]': { animationName: exitToRight }
    }
})

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: 10,
    top: "100%",
    overflow: "hidden",
    zIndex: 1,

    "@media (prefers-reduced-motion: no-preference)": {
        transition: "width, transform 250ms ease",
        '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
        '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` }
    }
})

const StyledArrow = styled("div", {
    position: "relative",
    top: "70%",
    backgroundColor: "white",
    width: 10,
    height: 10,
    transform: "rotate(45deg)",
    borderTopLeftRadius: 2
})

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
    <StyledIndicator {...props} ref={forwardedRef}>
        <StyledArrow />
    </StyledIndicator>
))

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
    position: "relative",
    transformOrigin: "top center",
    marginTop: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 6,
    overflow: "hidden",
    boxShadow:
        "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    height: "var(--radix-navigation-menu-viewport-height)",

    "@media only screen and (min-width: 600px)": {
        width: "var(--radix-navigation-menu-viewport-width)"
    },
    "@media (prefers-reduced-motion: no-preference)": {
        transition: "width, height, 300ms ease",
        '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
        '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` }
    }
})

// Exports
const NavigationMenu = StyledMenu
const NavigationMenuList = StyledList
const NavigationMenuItem = NavigationMenuPrimitive.Item
const NavigationMenuTrigger = StyledTriggerWithCaret
export const NavigationMenuLink = StyledLink
const NavigationMenuContent = StyledContent
const NavigationMenuViewport = StyledViewport
const NavigationMenuIndicator = StyledIndicatorWithArrow

// Your app...
const ContentList = styled("ul", {
    display: "grid",
    padding: 22,
    margin: 0,
    columnGap: 10,
    listStyle: "none",

    variants: {
        layout: {
            one: {
                "@media only screen and (min-width: 600px)": {
                    width: 500,
                    gridTemplateColumns: ".75fr 1fr",
                    height: "100%"
                }
            },
            two: {
                "@media only screen and (min-width: 600px)": {
                    width: 500,
                    gridTemplateColumns: "1fr 0.75fr"
                }
            },
            three: {
                "@media only screen and (min-width: 600px)": {
                    width: 600,
                    gridAutoFlow: "column",
                    gridTemplateRows: "repeat(3, 1fr)"
                }
            },
            four: {
                "@media only screen and (min-width: 600px)": {
                    width: 600,
                    gridAutoFlow: "column",
                    gridTemplateRows: "repeat(4, 1fr)",
                    gridTemplateColumns: "0.75fr 1fr"
                }
            }
        }
    }
})

export const ListItem = styled("li", {
    variants: {
        rowSpan: {
            1: {
                gridRow: "span 1"
            },
            2: {
                gridRow: "span 2"
            },
            3: {
                gridRow: "span 3"
            },
            4: {
                gridRow: "span 4"
            }
        }
    }
})

export const LinkTitle = styled("div", {
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: 5,
    color: orange.orange12
})

export const LinkText = styled("p", {
    all: "unset",
    color: mauve.mauve11,
    lineHeight: 1.4,
    fontWeight: "initial"
})

const ContentListItem = React.forwardRef(
    ({ children, title, ...props }, forwardedRef) => (
        <ListItem>
            <NavigationMenuLink
                {...props}
                ref={forwardedRef}
                css={{
                    padding: 12,
                    borderRadius: 6,
                    "&:hover": { backgroundColor: mauve.mauve3 }
                }}
                locale={props.locale}
            >
                <LinkTitle>{title}</LinkTitle>
                <LinkText css={{ fontSize: 14 }}>{children}</LinkText>
            </NavigationMenuLink>
        </ListItem>
    )
)

const ContentListItemCallout = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <ListItem rowSpan={props.rowSpan} title={props.imageTitle}>
            <NavigationMenuLink
                {...props}
                href={props.href}
                rel={props.rel || undefined}
                ref={forwardedRef}
                css={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    width: "300",
                    height: "100%",
                    borderRadius: 6,
                    padding: 0
                }}
                background={props.background ? props.background : "green"}
                locale={props.locale}
            >
                <Image
                    src={props.src}
                    //width="100%"
                    width={props.imageWidth || "300"}
                    height={props.imageHeight || "400"}
                    //height="auto"
                    layout="responsive"
                    css={{ borderRadius: 6 }}
                    //objectFit
                />
            </NavigationMenuLink>
        </ListItem>
    )
)
const ContentListItemCallout2 = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <ListItem css={{ gridRow: "span 3" }}>
            <NavigationMenuLink
                {...props}
                href={props.href}
                ref={forwardedRef}
                css={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    width: "300",
                    height: "100%",
                    background: `linear-gradient(135deg, ${teal.teal7} 0%, ${cyan.cyan11} 100%);`,
                    borderRadius: 6,
                    padding: 0
                }}
            >
                <Image
                    src={props.src}
                    //width="100%"
                    width="300"
                    height="400"
                    //height="auto"
                    layout="responsive"
                    //objectFit
                />
            </NavigationMenuLink>
        </ListItem>
    )
)
const ViewportPosition = styled("div", {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    top: "100%",
    left: -60,
    perspective: "2000px"
})

export const MyNavigationMenu = () => {
    const [offcanvas, setOffcanvas] = useState(false)
    const showOffcanvas = () => setOffcanvas(!offcanvas)

    const { t, i18n } = useTranslation("common")
    const router = useRouter()
    const { pathname, asPath, query } = router
    const switchToEnglish = () =>
        router.push({ pathname, query }, asPath, { locale: "en" })
    const switchToDeutsch = () =>
        router.push({ pathname, query }, asPath, { locale: "de" })

    return (
        <Fragment>
            <NavigationMenu css={{ background: "#ffffff" }}>
                <NavigationMenuList css={{ zIndex: offcanvas ? 0 : 20 }}>
                    <NavigationMenuItem>
                        <Link href="/" locale={router.locale}>
                            <a className="inline-block align-middle leading-[1]">
                                <Image
                                    src="/img/_evo/evo-e-logo.webp"
                                    alt="Logo"
                                    width={160}
                                    height={68}
                                />
                            </a>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>

                <NavigationMenuList
                    screen={{
                        "@initial": "hidden",
                        "@md": "visible"
                    }}
                >
                    <NavigationMenuItem
                        css={{ paddingLeft: 8, marginRight: 20 }}
                    >
                        <NavigationMenuLink
                            css={{
                                ...itemStyles,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 2,
                                marginRight: 4
                            }}
                            locale={router.locale}
                            href="/"
                        >
                            <a className="inline-block align-middle leading-[1]">
                                {t(navbar.home.key)}
                            </a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            {t(navbar.careers.title)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ContentList layout="one">
                                <ContentListItemCallout
                                    rowSpan={1}
                                    src={"/img/green-graphics.webp"}
                                    imageWidth="350"
                                    imageHeight="200"
                                    imageTitle={t(
                                        navbar.careers.children[0].description
                                    )}
                                    href={navbar.careers.children[0].href}
                                    locale={router.locale}
                                />
                                <ContentListItem
                                    locale={router.locale}
                                    href={navbar.careers.children[0].href}
                                    title={t(navbar.careers.children[0].title)}
                                >
                                    {t(navbar.careers.children[0].description)}
                                </ContentListItem>
                            </ContentList>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            {t(navbar.about.children[0].title)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ContentList layout="four">
                                <ContentListItemCallout
                                    src={"/img/charge-station.webp"}
                                    href={navbar.about.children[0].href}
                                    rel={navbar.about.children[0].rel}
                                    imageWidth="300"
                                    imageHeight="400"
                                    imageTitle={t(
                                        navbar.about.children[0].description
                                    )}
                                    rowSpan={4}
                                    locale={router.locale}
                                />
                                <ContentListItem
                                    locale={router.locale}
                                    href={navbar.about.children[0].href}
                                    title={t(navbar.about.children[0].title)}
                                >
                                    {t(navbar.about.children[0].description)}
                                </ContentListItem>
                                <ContentListItem
                                    locale={router.locale}
                                    href={navbar.about.children[1].href}
                                    title={t(navbar.about.children[1].title)}
                                >
                                    {t(navbar.about.children[0].description)}
                                </ContentListItem>
                                <ContentListItem
                                    locale={router.locale}
                                    href={navbar.about.children[2].href}
                                    title={t(navbar.about.children[2].title)}
                                >
                                    {t(navbar.about.children[0].description)}
                                </ContentListItem>
                                <ContentListItem
                                    locale={router.locale}
                                    href={navbar.about.children[3].href}
                                    title={t(navbar.about.children[3].title)}
                                >
                                    {t(navbar.about.children[0].description)}
                                </ContentListItem>
                            </ContentList>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            {t(navbar.support.title)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ContentList layout="one">
                                <ContentListItemCallout
                                    locale={router.locale}
                                    rowSpan={1}
                                    src={"/img/green-car.jpg"}
                                    imageWidth="350"
                                    imageHeight="200"
                                    imageTitle={t(
                                        navbar.support.children[0].description
                                    )}
                                    href={navbar.support.children[0].href}
                                />
                                <ContentListItem
                                    locale={router.locale}
                                    href={navbar.support.children[0].href}
                                    title={t(navbar.support.children[0].title)}
                                >
                                    {t(navbar.support.children[0].description)}
                                </ContentListItem>
                            </ContentList>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuIndicator />
                </NavigationMenuList>

                <NavigationMenuList
                    screen={{
                        "@initial": "hidden",
                        "@md": "visible"
                    }}
                >
                    <NavigationMenuLink
                        onClick={switchToEnglish}
                        css={{ cursor: "pointer" }}
                    >
                        EN
                    </NavigationMenuLink>
                    <NavigationMenuLink
                        onClick={switchToDeutsch}
                        css={{ cursor: "pointer" }}
                    >
                        DE
                    </NavigationMenuLink>
                </NavigationMenuList>

                <NavigationMenuList
                    screen={{
                        "@initial": "visible",
                        "@md": "hidden"
                    }}
                >
                    <button
                        className="menu-bars flex text-gray-800 text-[24px]"
                        aria-label="Right Align"
                    >
                        <FaBars onClick={showOffcanvas} />
                    </button>
                </NavigationMenuList>

                <ViewportPosition>
                    <NavigationMenuViewport />
                </ViewportPosition>
            </NavigationMenu>
            <div
                onClick={showOffcanvas}
                className={
                    offcanvas
                        ? "offcanvas-menu-wrap active z-50"
                        : "offcanvas-menu-wrap z-50"
                }
            >
                <nav className="offcanvas-menu blurry">
                    <ul
                        className="offcanvas-menu-items"
                        onClick={showOffcanvas}
                    >
                        <li className="navbar-toggle flex justify-between items-center pb-[15px]">
                            <div className="logo">
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/img/_evo/evo-engineering256x256.png"
                                            alt="Logo"
                                            width={200}
                                            height={200}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <button
                                className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all"
                                aria-label="Right Align"
                            >
                                <AiOutlineClose />
                            </button>
                        </li>
                        {Object.keys(navbar).map((m, index) => {
                            const item = navbar[m]
                            if (item.children) {
                                const children = item.children
                                return children.map((child, i) => (
                                    <li
                                        key={child.href + "drawer" + i}
                                        className={"drawer-link"}
                                    >
                                        <Link href={child.href}>
                                            <a>{i18n.t(child.title)}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                            return (
                                <li key={index} className={"drawer-link"}>
                                    <Link href={item.href}>
                                        <a>{i18n.t(item.title)}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default MyNavigationMenu
