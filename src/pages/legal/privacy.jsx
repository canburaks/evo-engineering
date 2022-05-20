import React, { Fragment } from "react"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../../next-i18next.config"
import { useTranslation } from "next-i18next"

const PrivacyPage = (props) => {
    const { t, i18n } = useTranslation("common")

    return (
        <div className="bg-white">
            <div className="relative flex flex-col items-center -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div
                        className="relative h-full text-lg max-w-7xl  mx-auto"
                        aria-hidden="true"
                    >
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                            />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                            />
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl ">
                    <div className="text-lg  mx-auto">
                        <h1 className="mb-16">
                            <span className="block text-4xl text-center text-gray-600 font-semibold tracking-wide uppercase">
                                {t("pages.privacy.title")}
                            </span>
                        </h1>
                        <h2 className="text-base z-10 relative text-left mt-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                            {t("pages.privacy.title1")}
                        </h2>
                        <p className="mt-2 text-base text-gray-500">
                            {t("pages.privacy.p1")}
                        </p>
                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        <h2 className="text-base z-10 relative text-left mt-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                            {t("pages.privacy.title2")}
                        </h2>
                        <p className="mt-2 text-base text-gray-500">
                            {t("pages.privacy.p2")}
                        </p>
                        <h2 className="text-base z-10 relative text-left mt-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                            {t("pages.privacy.title3")}
                        </h2>
                        <p className="mt-2 text-base text-gray-500">
                            {t("pages.privacy.p3")}
                        </p>
                        <h2 className="text-base z-10 relative text-left mt-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                            {t("pages.privacy.title4")}
                        </h2>
                        <div
                            className="mt-2 text-base text-gray-500"
                            dangerouslySetInnerHTML={{
                                __html: t("pages.privacy.p4")
                            }}
                        />
                        <h2 className="text-base z-10 relative text-left mt-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                            {t("pages.privacy.title5")}
                        </h2>
                        <div
                            className="mt-2 text-base text-gray-500"
                            dangerouslySetInnerHTML={{
                                __html: t("pages.privacy.p5")
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
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
export default PrivacyPage
