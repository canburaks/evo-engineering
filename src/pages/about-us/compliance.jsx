import React, { Fragment } from "react"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../../next-i18next.config"
import { useTranslation } from "next-i18next"
import { styled } from "../../styles/stitches.config"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: "#888",
    margin: "64px 0 32px 0",
    height: 2,
    borderRadius: 8
})

const Ul = styled("ul", {
    listStyle: "inside",

    marginBottom: 32,
    "& > li": {
        paddingLeft: 16,
        lineHeight: "2.5rem"
    }
})
const ContentBox = styled("div", {
    "& > p ": {
        lineHeight: "2rem",
        marginTop: 32
    }
})

export const ComplianceContent = () => {
    const { t, i18n } = useTranslation("common")
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                <div className="relative z-10">
                    <ContentBox className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                        <p>{t("pages.compliance.content.p2")}</p>
                        <Ul
                            role="list"
                            dangerouslySetInnerHTML={{
                                __html: t("pages.compliance.content.l1")
                            }}
                        ></Ul>
                        <p>{t("pages.compliance.content.p3")}</p>
                    </ContentBox>
                    <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none"></div>
                </div>
                <div className="mt-20 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                    <svg
                        className="absolute top-12 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={384}
                            fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                        />
                    </svg>
                    <blockquote className="relative bg-white rounded-lg shadow-lg mt-12">
                        <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                            <img
                                src="/img/evo-e-edit-560x237.webp"
                                alt="Workcation"
                                className="h-8"
                            />
                            <div className="relative text-lg text-gray-700 font-medium mt-8">
                                <svg
                                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="relative">
                                    {t("pages.compliance.description")}
                                </p>
                            </div>
                        </div>
                        <cite className="relative flex items-center sm:items-start bg-orange-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                            <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1"></span>
                        </cite>
                    </blockquote>
                </div>
            </div>
            <ContentBox className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                <p>{t("pages.compliance.content.p4")}</p>
                <p>{t("pages.compliance.content.p5")}</p>
                <p>{t("pages.compliance.content.p6")}</p>
                <p>{t("pages.compliance.content.p7")}</p>
                <p>{t("pages.compliance.content.p8")}</p>
                <p>{t("pages.compliance.content.p9")}</p>
                <p>{t("pages.compliance.content.p10")}</p>
                <p>{t("pages.compliance.content.p11")}</p>
                <p>{t("pages.compliance.content.p12")}</p>
                <p>{t("pages.compliance.content.p13")}</p>
            </ContentBox>
        </>
    )
}

const CompliancePage = () => {
    const { t, i18n } = useTranslation("common")

    return (
        <Fragment>
            <Head>
                <title>{t("pages.about.metaTitle")}</title>
                <meta
                    name="description"
                    content={t("pages.about.metaDescription")}
                />
            </Head>
            <div className="bg-white">
                <div className="py-16 pb-60 bg-gray-50 overflow-hidden">
                    <div className="max-w-6xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                            <span className="text-base text-orange-600 font-semibold tracking-wide uppercase">
                                EVO ENGINEERING
                            </span>
                            <h1 className="text-3xl mt-4 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                {t("pages.compliance.title")}
                            </h1>
                        </div>
                        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
                            <p className="text-lg text-gray-500">
                                {t("pages.compliance.content.p1")}
                            </p>
                        </div>
                        <ComplianceContent />
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

export default CompliancePage
