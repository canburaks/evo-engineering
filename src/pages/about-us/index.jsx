import React, { Fragment } from "react"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../../next-i18next.config"
import { useTranslation } from "next-i18next"
import { styled } from "../../styles/stitches.config"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import {
    LightningBoltIcon,
    MagicWandIcon,
    StarIcon,
    GlobeIcon
} from "@radix-ui/react-icons"
import { ComplianceContent } from "./compliance"
import { FadingHero } from "../../components/fading-hero"
import TabsSection from "../../components/tabs-section"

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
                <FadingHero
                    src={"/img/office.webp"}
                    title={t("pages.about.title")}
                    description={t("pages.about.mission.description")}
                    title1={t("pages.about.visionAndMission")}
                    title2={t("pages.about.values.title")}
                    title3={t("pages.about.infosec.title")}
                    title4={t("pages.about.quality.title")}
                    items1={[
                        {
                            title: t("pages.about.vision.title"),
                            description: t("pages.about.vision.description")
                        },
                        {
                            title: t("pages.about.mission.title"),
                            description: t("pages.about.mission.description")
                        }
                    ]}
                    items2={[
                        {
                            title: t("pages.about.values.value1.title"),
                            description: t(
                                "pages.about.values.value1.description"
                            )
                        },
                        {
                            title: t("pages.about.values.value2.title"),
                            description: t(
                                "pages.about.values.value2.description"
                            )
                        },
                        {
                            title: t("pages.about.values.value3.title"),
                            description: t(
                                "pages.about.values.value3.description"
                            )
                        },
                        {
                            title: t("pages.about.values.value4.title"),
                            description: t(
                                "pages.about.values.value4.description"
                            )
                        }
                    ]}
                    items3={[
                        { text: t("pages.about.infosec.p1") },
                        { text: t("pages.about.infosec.p2") }
                    ]}
                    items4={[
                        { text: t("pages.about.quality.p1") },
                        { text: t("pages.about.quality.p2") },
                        { text: t("pages.about.quality.p3") },
                        { text: t("pages.about.quality.p4") },
                        { text: t("pages.about.quality.p5") }
                    ]}
                />
            </div>
        </Fragment>
    )
}

const AboutOldContent = () => (
    <>
        <section className="bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-semibold text-gray-200 capitalize lg:text-4xl">
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
                            <span className="inline-block p-2 text-orange-500 bg-blue-100 rounded-xl md:mx-4 bg-orange-500"></span>

                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h2
                                    className="text-2xl font-semibold text-gray-200 capitalize"
                                    id="mission"
                                >
                                    {t("pages.about.vision.title")}
                                </h2>

                                <p className="mt-3 text-gray-300">
                                    {t("pages.about.vision.description")}
                                </p>
                            </div>
                        </div>

                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-orange-500 bg-blue-100 rounded-xl md:mx-4 bg-orange-500"></span>

                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h2
                                    className="text-2xl font-semibold text-gray-200 capitalize"
                                    id="mission"
                                >
                                    {t("pages.about.mission.title")}
                                </h2>

                                <p className="mt-3 text-gray-300">
                                    {t("pages.about.mission.description")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img
                            className="w-[24rem] h-[24rem] object-cover xl:w-[28rem] xl:h-[28rem] rounded-full"
                            src="/img/contours-line.webp"
                            alt="EVO Engineering electrical cars"
                        />
                    </div>
                </div>

                <StyledSeparator className="border-gray-200 my-12 border-gray-700" />

                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"></div>
            </div>
        </section>

        <div className="bg-white max-w-6xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 pb-40">
            <div className="container px-6 py-12 mx-auto">
                <h2
                    className="text-2xl md:text-3xl font-semibold text-gray-800 lg:text-5xl mt-12"
                    id="values"
                >
                    {t("pages.about.values.title")}
                </h2>

                <div className="grid grid-cols-1 gap-8  md:grid-cols-2">
                    <div className="mt-16">
                        <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                            <StarIcon />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700">
                                {t("pages.about.values.value1.title")}
                            </h3>

                            <p className="mt-2 text-lg text-gray-500 ">
                                {t("pages.about.values.value1.description")}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                            <LightningBoltIcon />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700">
                                {t("pages.about.values.value2.title")}
                            </h3>

                            <p className="mt-2 text-lg text-gray-500 ">
                                {t("pages.about.values.value2.description")}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                            <MagicWandIcon />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700">
                                {t("pages.about.values.value3.title")}
                            </h3>

                            <p className="mt-2 text-lg text-gray-500 ">
                                {t("pages.about.values.value3.description")}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
                            <GlobeIcon />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700">
                                {t("pages.about.values.value4.title")}
                            </h3>

                            <p className="mt-2 text-lg text-gray-500 ">
                                {t("pages.about.values.value4.description")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white max-w-6xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 pb-40">
            <h2
                className="text-2xl md:text-3xl font-semibold text-gray-800 lg:text-5xl mt-12"
                id="compliance"
            >
                {t("pages.compliance.title")}
            </h2>
            <ComplianceContent />
        </div>
    </>
)

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
