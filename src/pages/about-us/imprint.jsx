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


const ImprintPage = () => {
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
                                        {t("pages.compliance.title")}
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

                                    <div className="md:mx-4 md:mt-0">
                                        <h2
                                            className="text-2xl  text-gray-200 capitalize"
                                            id="mission"
                                        >
                                            {t("pages.compliance.description")}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                                <img
                                    className="w-[20rem] h-[20rem] object-cover xl:w-[28rem] xl:h-[28rem] rounded-full"
                                    src="/img/compliance.webp"
                                    alt="EVO Engineering electrical cars"
                                />
                            </div>
                        </div>

                        <StyledSeparator className="border-gray-200 my-12 dark:border-gray-700" />
                    </div>
                </section>
                <div className="py-16 bg-gray-50 overflow-hidden">

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

export default ImprintPage
