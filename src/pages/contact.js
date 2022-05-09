import Head from "next/head"
import { Fragment, useRef, useEffect, useState } from "react"
import HeaderTwo from "../components/header/header-2"
import GoogleMap from "../components/contact/google-map"
import ContactForm from "../components/contact/contact-form"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../next-i18next.config"
import { useTranslation } from "next-i18next"
import { MailIcon, PhoneIcon, PrinterIcon } from "@heroicons/react/outline"
import { useWindowSize } from "../lib/use-window-size.jsx"
import { styled } from "../styles/stitches.config"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: "#888",
    margin: "64px 0 32px 0",
    height:2,
    borderRadius:8
})

function ContactPage(props) {
    const { t, i18n } = useTranslation("common")
    console.log("contact props", props, t("pages.contact"))
    const [size, setSize] = useState({ width: 600, height: 400 })
    const myref = useRef(null)
    useEffect(() => {
        if (myref && myref.current) {
            const attrs = myref.current.getBoundingClientRect()
            const w = Math.floor(attrs.width) - 96
            const h = 400

            if (w && h && w !== size.width) {
                setSize({ width: w, height: h })
            }
            console.log("wh", w, h)
        }
    })
    return (
        <Fragment>
            <Head>
                <title>{t("pages.contact.metaTitle")}</title>
                <meta
                    name="description"
                    content={t("pages.contact.metaDescription")}
                />
            </Head>
            <div className="bg-white">
                <div
                    className="max-w-6xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
                    ref={myref}
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 lg:text-6l">
                        {t("pages.contact.title")}
                    </h1>
                    <p className="mt-6 text-lg text-gray-500 max-w-3xl">
                        {t("pages.contact.description")}
                    </p>

                    <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 lg:text-xl">
                                {t("pages.contact.office.title")}
                            </h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t("pages.contact.office.content")
                                }}
                                className="text-base text-gray-500 mt-8"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 lg:text-xl">
                                {t("pages.contact.communication.title")}
                            </h3>
                            <dl className="mt-8 space-y-6">
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd className="flex text-base text-gray-500">
                                    <MailIcon
                                        className="flex-shrink-0 w-6 h-6 text-gray-700"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="ml-3"
                                        dangerouslySetInnerHTML={{
                                            __html: t("pages.contact.email")
                                        }}
                                    />
                                </dd>
                                <dt>
                                    <span className="sr-only">
                                        Phone number
                                    </span>
                                </dt>
                                <dd className="flex text-base text-gray-500">
                                    <PhoneIcon
                                        className="flex-shrink-0 w-6 h-6 text-gray-700"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="ml-3"
                                        dangerouslySetInnerHTML={{
                                            __html: t("pages.contact.tel")
                                        }}
                                    />
                                </dd>

                                <dt>
                                    <span className="sr-only">Fax</span>
                                </dt>
                                <dd className="flex text-base text-gray-500">
                                    <PrinterIcon
                                        className="flex-shrink-0 w-6 h-6 text-gray-700"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="ml-3"
                                        dangerouslySetInnerHTML={{
                                            __html: t("pages.contact.fax")
                                        }}
                                    />
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <StyledSeparator css={{ backgroundColor: "#ccc" }} />
                    <div className="flex flex-col items-center p-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5319.913998109177!2d11.584885!3d48.18818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa224758fc978225d!2sEVO%20Engineering%20GmbH!5e0!3m2!1sde!2str!4v1652131992150!5m2!1sde!2str"
                            width={size.width}
                            height={size.height}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(
                locale,
                ["common"],
                nextI18NextConfig
            ))
        }
    }
}

export default ContactPage
