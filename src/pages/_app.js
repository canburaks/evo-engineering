import { Fragment } from "react"
import "../../public/stylesheets/global.css"
import "@splidejs/react-splide/css/sea-green"

import Head from "next/head"
import { ScrollToTop } from "../components/scroll"
//import ContextLayout from "../layout/context"
import { Layout } from "../layout/layout"
import { appWithTranslation } from "next-i18next"
import nextI18NextConfig from "../../next-i18next.config"

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ScrollToTop />
        </Fragment>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
