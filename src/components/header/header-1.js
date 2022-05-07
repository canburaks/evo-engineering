import Link from "next/link"
import Image from "next/image"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { useState, useEffect, Fragment } from "react"
import { useRouter } from "next/router"
import { OffcanvasData } from "./offcanvas-data"
import WhiteLogo from "./white-logo"
import { i18n } from "next-i18next"
import { navbar } from "../../settings"
import { MyNavigationMenu } from "../../styles/primitives/"

function HeaderOne({ menu }) {
    const [offcanvas, setOffcanvas] = useState(false)
    const showOffcanvas = () => setOffcanvas(!offcanvas)

    useEffect(() => {
        window.addEventListener("scroll", isSticky)
        return () => {
            window.removeEventListener("scroll", isSticky)
        }
    })

    const isSticky = (e) => {
        const header = document.querySelector(".header-section")
        const scrollTop = window.scrollY
        scrollTop >= 250
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky")
    }

    const router = useRouter()
    console.log("router", router)
    const headerCss = `flex lg:justify-between justify-end items-center`
    return (
        <Fragment>
            <header className="absolute w-full z-10">
                <div className="sticky-holder header-section sticky-style-1">
                    <div className="custom-container container">
                        <div className="grid grid-cols-12 items-center leading-[80px]">
                            <div className="lg:col-span-2 col-span-6">
                                <WhiteLogo />
                            </div>
                            <div className="lg:col-span-7 lg:block hidden">
                                <nav>
                                    <ul className="main-menu text-white">
                                        {Object.keys(menu).map((m) =>
                                            !menu[m].children ? (
                                                <li key={menu[m].href}>
                                                    <Link href={menu[m].href}>
                                                        <a>
                                                            {i18n.t(
                                                                menu[m].key
                                                            )}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ) : (
                                                <li
                                                    key={menu[m].key}
                                                    className="dropdown-button"
                                                >
                                                    <span className="">
                                                        {i18n.t(menu[m].key)}
                                                    </span>

                                                    <div className="dropdown-content">
                                                        {menu[m].children.map(
                                                            (mc) => (
                                                                <Link
                                                                    href={
                                                                        mc.href
                                                                    }
                                                                    key={
                                                                        mc.href
                                                                    }
                                                                >
                                                                    <a>
                                                                        {i18n.t(
                                                                            mc.key
                                                                        )}
                                                                    </a>
                                                                </Link>
                                                            )
                                                        )}
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </nav>
                            </div>
                            <div className="lg:col-span-3 col-span-6">
                                <div className={`outer-box ${headerCss}`}>
                                    <ul className="language-list text-white">
                                        <li>
                                            <Link
                                                href={router.route}
                                                locale="en"
                                            >
                                                EN
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={router.route}
                                                locale="de"
                                            >
                                                DE
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="offcanvas-area">
                                        <div className="offcanvas">
                                            <button
                                                className="menu-bars flex text-white text-[24px]"
                                                aria-label="Right Align"
                                            >
                                                <FaBars
                                                    onClick={showOffcanvas}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                onClick={showOffcanvas}
                className={
                    offcanvas
                        ? "offcanvas-menu-wrap active"
                        : "offcanvas-menu-wrap"
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
                        {Object.keys(menu).map((m, index) => {
                            const item = menu[m]
                            if (item.children) {
                                const children = item.children
                                return children.map((child, i) => (
                                    <li
                                        key={child.href + "drawer" + i}
                                        className={"drawer-link"}
                                    >
                                        <Link href={child.href}>
                                            <a>{i18n.t(child.key)}</a>
                                        </Link>
                                    </li>
                                ))
                            }
                            return (
                                <li key={index} className={"drawer-link"}>
                                    <Link href={item.href}>
                                        <a>{i18n.t(item.key)}</a>
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

export default HeaderOne
