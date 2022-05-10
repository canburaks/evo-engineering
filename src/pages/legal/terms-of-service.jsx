import React, { Fragment } from "react"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18NextConfig from "../../../next-i18next.config"
import { useTranslation } from "next-i18next"

const TermsOfService = (props) => {
    return <div>TermsOfService</div>
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
export default TermsOfService
