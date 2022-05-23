import { Fragment, useContext } from "react"
import Link from "next/link"
import Head from "next/head"
import { getAllItems, getFeaturedItems } from "../lib/items-util"
import HeaderOne from "../components/header/header-1"
//import Hero from "../components/home-page/hero"
import Services from "../components/home-page/services"
import About from "../components/home-page/about"
import PricingTab from "../components/home-page/pricing-tab"
import Testimonial from "../components/home-page/testimonial"
import Brand from "../components/home-page/brand"
import FeaturedPost from "../components/home-page/featured-post"
import LatestProject from "../components/home-page/latest-project"
//import Footer from "../components/layout/footer"
import { Features, Feature } from "../components/features"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../next-i18next.config"
import { site, s, navbar } from "../settings"
import { useTranslation } from "next-i18next"
import Footer from "../layout/footer"
import { Box } from "../styles/primitives"

import { styled, css } from "../styles/stitches.config"
import { useRouter } from "next/router"
import { FeatureColorful } from "../components/feature-colorful"
import { FeatureSection } from "../components/features-section.jsx"
import FadingSection from "../components/fading-section"
import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    MailIcon,
    ScaleIcon,
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    XIcon,
    ServerIcon
} from "@heroicons/react/outline"
import { Hero } from "../components/new-hero"
import {
    TestimonialSection,
    FAQ,
    ExpertiseSection
} from "../components/demo/landing-page"

function HomePage(props) {
    const { t, i18n } = useTranslation("common")

    return (
        <Fragment>
            <Head>
                <title>{t("pages.home.metaTitle")}</title>
                <meta
                    name="description"
                    content={t("pages.home.metaDescription")}
                />
            </Head>

            <Hero
                title="Next Generation Electrification"
                description="We support our customers developing future generations of electric drives in the automotive sector."
            />
            <div id="home-page">
                {/*<Hero heroItems={props.heroItems} data={site} />*/}
                <FeatureSection
                    title={t("pages.home.featureSection.title")}
                    description={t("pages.home.featureSection.title")}
                    values={[
                        {
                            title: t("pages.home.featureSection.value1.title"),
                            description: t(
                                "pages.home.featureSection.value1.description"
                            ),
                            icon: GlobeAltIcon
                        },
                        {
                            title: t("pages.home.featureSection.value2.title"),
                            description: t(
                                "pages.home.featureSection.value2.description"
                            ),
                            icon: ScaleIcon
                        },
                        {
                            title: t("pages.home.featureSection.value3.title"),
                            description: t(
                                "pages.home.featureSection.value3.description"
                            ),
                            icon: LightningBoltIcon
                        },
                        {
                            title: t("pages.home.featureSection.value4.title"),
                            description: t(
                                "pages.home.featureSection.value4.description"
                            ),
                            icon: AnnotationIcon
                        }
                    ]}
                />

                <ExpertiseSection
                    subtitle={t("pages.home.fading-section.subtitle")}
                    title={t("pages.home.fading-section.title")}
                    description={t("pages.home.fading-section.description")}
                    features={[
                        {
                            title: t("pages.home.fading-section.expertise1"),
                            icon: "/img/requirements-engineering.webp"
                        },
                        {
                            title: t("pages.home.fading-section.expertise2"),
                            icon: "/img/function-engineering.webp"
                        },
                        {
                            title: t("pages.home.fading-section.expertise3"),
                            icon: "/img/female-it.webp"
                        },
                        {
                            title: t("pages.home.fading-section.expertise4"),
                            icon: "/img/robotics.webp"
                        }
                    ]}
                    linkTitle={t("pages.about.title")}
                />

                <TestimonialSection
                    src={"/img/white-verticall.webp"}
                    title={undefined}
                    buttonText={t("pages.home.join")}
                />

                <FAQ
                    title={t("pages.home.faq.title")}
                    description={t("pages.home.faq.description")}
                    questions={[
                        {
                            id: "faq-1",
                            question: t("pages.home.faq.questions.q1"),
                            answer: t("pages.home.faq.questions.a1")
                        },
                        {
                            id: "faq-2",
                            question: t("pages.home.faq.questions.q2"),
                            answer: t("pages.home.faq.questions.a2")
                        },
                        {
                            id: "faq-3",
                            question: t("pages.home.faq.questions.q3"),
                            answer: t("pages.home.faq.questions.a3")
                        },
                        {
                            id: "faq-4",
                            question: t("pages.home.faq.questions.q4"),
                            answer: t("pages.home.faq.questions.a4")
                        }
                    ]}
                />
            </div>
        </Fragment>
    )
}

export async function getStaticProps({ locale }) {
    const heroItems = getAllItems("heros")
    const posts = getAllItems("posts")
    const projects = getAllItems("projects")
    const services = getAllItems("services")
    const pricingItems = getAllItems("pricing")
    const testimonialItems = getAllItems("testimonial")
    const brandItems = getAllItems("brands")
    const LatestProject = getFeaturedItems(projects)
    const FeaturedPost = getFeaturedItems(posts)

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

export default HomePage
