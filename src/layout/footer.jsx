import Image from "next/image"
import Link from "next/link"
import { footer, s } from "../settings"
import { i18n } from "next-i18next"
import { useTranslation } from "next-i18next"

const FooterBox = (props) => (
    <footer
        {...props}
        style={{
            background: "#161b22",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch"
        }}
    />
)

export default function Footer() {
    const { t, i18n } = useTranslation("common")

    return (
        <FooterBox aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid lg:grid-cols-5 lg:gap-8">
                    <div className="flex flex-col col-span-1 md:col-span-2 mt-8">
                        <h3 className="text-sm font-semibold tracking-wider uppercase  text-sans text-white">
                            <a href="/">EVO Engineering GmbH</a>
                        </h3>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: t("pages.contact.office.content")
                            }}
                            className="text-gray-400 mt-4"
                        />
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-8 col-span-1 md:col-span-2 lg:col-span-1 mt-8">
                        {Object.keys(footer)
                            .slice(0, 1)
                            .map((key) => (
                                <div key={key}>
                                    <h3 className="text-sm font-semibold tracking-wider uppercase  text-sans text-white">
                                        {i18n.t(key)}
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {footer[key].map((item) => (
                                            <li key={item.key}>
                                                <Link
                                                    href={item.href}
                                                >
                                                    <a className="text-base text-white hover-opacity">
                                                        {i18n.t(item.key)}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-8 col-span-1 md:col-span-2 lg:col-span-1 mt-8">
                        {Object.keys(footer)
                            .slice(1, 2)
                            .map((key) => (
                                <div key={key}>
                                    <h3 className="text-sm font-semibold tracking-wider uppercase  text-sans text-white">
                                        {i18n.t(key)}
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {footer[key].map((item) => (
                                            <li key={item.key}>
                                                <Link href={item.href}>
                                                    <a className="text-base text-white hover-opacity">
                                                        {i18n.t(item.key)}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-8 ccol-span-1 md:col-span-2 lg:col-span-1 mt-8">
                        {Object.keys(footer)
                            .slice(2, 3)
                            .map((key) => (
                                <div key={key}>
                                    <h3 className="text-sm font-semibold tracking-wider uppercase  text-sans text-white">
                                        {i18n.t(key)}
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                        {footer[key].map((item) => (
                                            <li key={item.key}>
                                                <Link href={item.href}>
                                                    <a>
                                                        <span className="text-base text-white hover-opacity">
                                                            {i18n.t(item.key)}
                                                        </span>
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {footer.social.map(
                            (item) =>
                                s(item.key) && (
                                    <Link
                                        href={s(item.key)}
                                        key={item.key}
                                        className="text-gray-400 hover:text-gray-300  cursor-pointer"
                                    >
                                        <a>
                                            <span className="sr-only">
                                                {item.key}
                                            </span>
                                            <item.icon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </Link>
                                )
                        )}
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 text-white">
                            &copy; {new Date().getFullYear()}{" "}
                            {s("officialName")}, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-16 md:flex md:items-center md:justify-between">
                    <div className="w-full flex justify-center items-center -mb-8">
                        <Link href="https://webmeister.org">
                            <a
                                target="_blank"
                                rel="noopener"
                                style={{ opacity: 0.6 }}
                            >
                                <img
                                    src={"/img/webmeister-white.png"}
                                    alt={"Developed and designed by"}
                                    width={80}
                                    height={11}
                                    loading="lazy"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </FooterBox>
    )
}

const myLoader = ({ src, width, quality }) => {
    return `${process.env.host}/${src}?w=${width}&q=${quality || 75}`
}
