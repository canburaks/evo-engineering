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
import {
    MyNavigationMenu,
    NavigationMenuLink
} from "../styles/primitives/navigation"
import { styled, css } from "../styles/stitches.config"
import { useRouter } from "next/router"
import { FeatureColorful } from "../components/feature-colorful"
import { FeatureSection } from "../components/features-section.jsx"
import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    MailIcon,
    ScaleIcon
} from "@heroicons/react/outline"
import { Hero } from "../components/new-hero"

function HomePage(props) {
    const { t, i18n } = useTranslation("common")

    console.log("translate", t("pages"))
    console.log("translate", t("pages.feature2.title"))
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
