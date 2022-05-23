import React, { Fragment } from "react"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../../next-i18next.config"
import { useTranslation } from "next-i18next"
import { styled } from "../../styles/stitches.config"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { PaperClipIcon } from "@heroicons/react/solid"

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
            <div className="bg-white" id="imprint">
                <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 py-20">
                    <div className="container px-6 py-10 mx-auto">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {t("pages.imprint.title")}
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    {t("pages.imprint.subtitle")}
                                </p>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item1.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item1.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item10.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item10.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item3.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item3.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item4.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item4.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item5.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item5.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item6.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item6.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item7.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item7.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.item8.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.item8.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.text1.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.text1.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.text2.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.text2.value")}
                                        </dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">
                                            {t("pages.imprint.text3.title")}
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {t("pages.imprint.text3.value")}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </section>
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
