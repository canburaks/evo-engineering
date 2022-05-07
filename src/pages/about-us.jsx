import React, { Fragment } from "react"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../next-i18next.config"
import { useTranslation } from "next-i18next"
import { styled } from "../styles/stitches.config"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: "#888",
    margin: "64px 0 32px 0",
    height: 2,
    borderRadius: 8
})

const AboutPage = () => {
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
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <div className="lg:flex lg:items-center">
                            <div className="w-full space-y-12 lg:w-1/2 ">
                                <div>
                                    <h1 className="text-3xl font-semibold text-gray-200 capitalize lg:text-4xl">
                                        {t("pages.about.title")}
                                        <br />
                                    </h1>

                                    <div className="mt-2">
                                        <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                        <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                        <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                                    </div>
                                </div>

                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-orange-500 bg-blue-100 rounded-xl md:mx-4 dark:bg-orange-500"></span>

                                    <div className="mt-4 md:mx-4 md:mt-0">
                                        <h2
                                            className="text-2xl font-semibold text-gray-200 capitalize"
                                            id="mission"
                                        >
                                            {t("pages.about.vision.title")}
                                        </h2>

                                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                                            {t(
                                                "pages.about.vision.description"
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-orange-500 bg-blue-100 rounded-xl md:mx-4 dark:bg-orange-500"></span>

                                    <div className="mt-4 md:mx-4 md:mt-0">
                                        <h2
                                            className="text-2xl font-semibold text-gray-200 capitalize"
                                            id="mission"
                                        >
                                            {t("pages.about.mission.title")}
                                        </h2>

                                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                                            {t(
                                                "pages.about.mission.description"
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                                <img
                                    className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                                    src="/img/car-grid.webp"
                                    alt="EVO Engineering electrical cars"
                                />
                            </div>
                        </div>

                        <StyledSeparator className="border-gray-200 my-12 dark:border-gray-700" />

                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"></div>
                    </div>
                </section>

                <div className="bg-white max-w-6xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 pb-40">
                    <div className="container px-6 py-12 mx-auto">
                        <h2
                            className="text-3xl font-semibold text-gray-800 lg:text-5xl mt-12"
                            id="values"
                        >
                            {t("pages.about.values.title")}
                        </h2>

                        <div className="grid grid-cols-1 gap-8  md:grid-cols-2">
                            <div className="mt-16">
                                <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-700">
                                        {t("pages.about.values.value1.title")}
                                    </h3>

                                    <p className="mt-2 text-lg text-gray-500 ">
                                        {t(
                                            "pages.about.values.value1.description"
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-700">
                                        {t("pages.about.values.value2.title")}
                                    </h3>

                                    <p className="mt-2 text-lg text-gray-500 ">
                                        {t(
                                            "pages.about.values.value2.description"
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-700">
                                        {t("pages.about.values.value3.title")}
                                    </h3>

                                    <p className="mt-2 text-lg text-gray-500 ">
                                        {t(
                                            "pages.about.values.value3.description"
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-700">
                                        {t("pages.about.values.value4.title")}
                                    </h3>

                                    <p className="mt-2 text-lg text-gray-500 ">
                                        {t(
                                            "pages.about.values.value4.description"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
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

export default AboutPage
