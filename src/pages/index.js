import { Fragment, useContext } from "react"
import Head from "next/head"
import { getAllItems, getFeaturedItems } from "../lib/items-util"
import HeaderOne from "../components/header/header-1"
import Hero from "../components/home-page/hero"
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
            <HeaderOne menu={navbar} />
            <Hero heroItems={props.heroItems} data={site} />
            <Feature
                image="/img/_evo/ev-plug-hand.jpg"
                title={t("pages.home.feature1.title")}
                description={t("pages.home.feature1.description")}
                order={0}
            />
            <Feature
                image="/img/_evo/ev-plug-neon.jpg"
                title={t("pages.home.feature2.title")}
                description={t("pages.home.feature2.description")}
                order={1}
            />
            <Footer />
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
            heroItems,
            projects: LatestProject,
            posts: FeaturedPost,
            services,
            pricingItems,
            testimonialItems,
            brandItems,
            ...(await serverSideTranslations(
                locale,
                ["common"],
                nextI18NextConfig
            ))
        }
    }
}

export default HomePage
